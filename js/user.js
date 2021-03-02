/**
*==================================================
Copyright [2021] [HCL Technologies]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*==================================================
**/
import { ga } from './index.js';
import { ecommerceStr } from '../partials/ecommercedashboardPartial.js';
import { basicStr } from '../partials/basicdashboardPartial.js';

var newIds = {};
var viewArr = [];
window.addEventListener('DOMContentLoaded', (event) => {
    ga.init();
    
    gapi.analytics.ready(function () {
        var flag = true;
        gapi.analytics.auth.authorize({
            container: 'auth-button',
            clientid: ga.CLIENT_ID,
        });
    
        gapi.analytics.auth.on('success', function (response) {
            document.getElementById('dashboard').innerHTML = flag ? ecommerceStr : basicStr;
            viewArr = flag ? createEcommerceView() : createBasicView();
            viewSelector.execute();

            var todaysDate = new Date();
            document.getElementById("endDate").value = todaysDate.toISOString().substring(0, 10);            
            todaysDate.setDate(todaysDate.getDate() - 7);
            document.getElementById("startDate").value = todaysDate.toISOString().substring(0, 10);
        });
    
        var viewSelector = new gapi.analytics.ViewSelector({
            container: 'view-selector'
        });
    
        viewSelector.on('change', function (ids) {
            newIds = {
                query: {
                    ids: ids
                }
            }
            viewArr.forEach(element => {
                element.set(newIds).execute();
            });
            document.getElementById("getDaysButton").addEventListener("click", reloadCharts);
        });
    });
    
});

function reloadCharts() {
    ga.getDays();
    viewArr = createEcommerceView();    
    viewArr.forEach(element => {
        element.set(newIds).execute();
    });
}

function createBasicView() {
    var arr = [];

    var users = ga.getData('ga:users').on('success', function (response) {
        document.getElementById('ga_users').innerHTML = response.rows[0][0];
    });

    var newusers = ga.getData('ga:newUsers').on('success', function (response) {
        document.getElementById('ga_newusers').innerHTML = response.rows[0][0];
    });

    var nosession = ga.getData('ga:sessionsPerUser').on('success', function (response) {
        document.getElementById('ga_noSession').innerHTML = parseFloat(response.rows[0][0]).toFixed(2);
    });

    var sessions = ga.getData('ga:sessions').on('success', function (response) {
        document.getElementById('ga_sessions').innerHTML = response.rows[0][0];
    });

    var pageviews = ga.getData('ga:pageviews').on('success', function (response) {
        document.getElementById('ga_pageViews').innerHTML = response.rows[0][0];
    });

    var pages = ga.getData('ga:pageviewsPerSession').on('success', function (response) {
        document.getElementById('ga_pages').innerHTML = parseFloat(response.rows[0][0]).toFixed(2);
    });

    var avgduration = ga.getData('ga:avgSessionDuration').on('success', function (response) {
        document.getElementById('ga_avgduration').innerHTML = (response.rows[0][0]).toHHMMSS();
    });

    var bouncerate = ga.getData('ga:bounceRate').on('success', function (response) {
        document.getElementById('ga_BounceRate').innerHTML = parseFloat(response.rows[0][0]).toFixed(2) + "%";
    });

    arr.push(users, newusers, nosession, sessions, pageviews, pages, avgduration, bouncerate);

    var audience = ga.createChart('ga:date', 'ga:users,ga:newusers', 'LINE', 'ga_audience', {}, { curveType: 'function', legend: { position: 'top' } });

    var usertypesChart = ga.createChart('ga:userType', 'ga:sessions', 'PIE', 'ga_usertype', {}, { pieHole: 0.4 });
    var usertypesTable = ga.createTable('ga:userType', 'ga:sessions', 'TABLE', 'ga_newuserchart', '-ga:sessions', 5);

    var languageChart = ga.createChart('ga:language', 'ga:users,ga:newusers', 'COLUMN', 'ga_language', {}, { isStacked: true });
    var langtbl = ga.createTable('ga:language', 'ga:users,ga:newusers', 'TABLE', 'ga_languageTbl', '-ga:users', 5);

    var countryChart = ga.createChart('ga:continent', 'ga:users', 'GEO', 'ga_country', {}, { displayMode: 'Text', colorAxis: { colors: ['green'] } });
    var countrytbl = ga.createTable('ga:continent', 'ga:users,ga:newusers', 'TABLE', 'ga_countryTbl', '-ga:users', 5);

    var deviceChart = ga.createChart('ga:deviceCategory', 'ga:users,ga:newusers', 'PIE', 'ga_device', {}, { pieHole: 0.4 });
    var devicetbl = ga.createTable('ga:deviceCategory', 'ga:users,ga:newusers', 'TABLE', 'ga_deviceTbl', '-ga:users', 5);

    var pagesChart = ga.createChart('ga:dimension1', 'ga:pageviews', 'PIE', 'ga_pagesChart', {}, { pieHole: 0.4 });
    var pagestbl = ga.createTable('ga:dimension1', 'ga:pageviews', 'TABLE', 'ga_pagestbl', '-ga:pageviews', 10);

    var pagetitleChart = ga.createChart('ga:pageTitle', 'ga:users,ga:newusers', 'COLUMN', 'ga_pagetitleChart', { 'max-results': 5, 'sort': '-ga:users' }, { isStacked: false });
    var pagetitletbl = ga.createTable('ga:pageTitle', 'ga:pageviews', 'TABLE', 'ga_pagetitletbl', '-ga:pageviews', 10);

    var userSessionChart = ga.createChart('ga:dimension3', 'ga:users,ga:newusers', 'COLUMN', 'ga_usersessionChart', { 'max-results': 5, 'sort': '-ga:users' }, { isStacked: true });
    var userSessiontbl = ga.createTable('ga:dimension3', 'ga:sessions', 'TABLE', 'ga_usersessiontbl', '-ga:sessions', 10);

    var eventChart = ga.createChart('ga:eventCategory', 'ga:totalEvents', 'PIE', 'ga_eventChart', { 'max-results': 5, 'sort': '-ga:totalEvents' }, { pieHole: 0.4 });
    var eventtbl = ga.createTable('ga:eventAction', 'ga:totalEvents', 'TABLE', 'ga_eventtbl', '-ga:totalEvents', 10);

    var searchChart = ga.createChart('ga:searchKeyword', 'ga:pageviews', 'PIE', 'ga_searchChart', { 'max-results': 10, 'sort': '-ga:pageviews' }, { pieHole: 0.4 });
    var searchtbl = ga.createTable('ga:searchKeyword', 'ga:pageviews', 'TABLE', 'ga_searchtbl', '-ga:pageviews', 10);

    var pagetbl = ga.createTable('ga:pagePath', 'ga:pageviews,ga:timeOnPage,ga:bounceRate', 'TABLE', 'ga_pagepathbl', '-ga:pageviews', 20);
    arr.push(audience, usertypesChart, usertypesTable, languageChart, langtbl, countryChart, countrytbl, deviceChart, devicetbl, pagesChart, pagestbl, pagetitleChart, pagetitletbl, userSessionChart, userSessiontbl, eventChart, eventtbl, searchChart, searchtbl, pagetbl);

    return arr;
};

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
}

function createEcommerceView() {
    var arr = [];
    var report = ga.getData('ga:transactionRevenue').on('success', function (response) {
        document.getElementById('total_revenue').innerHTML = "$" + response.rows[0][0];
    });

    var report1 = ga.getData('ga:transactions').on('success', function (response) {
        document.getElementById('orders').innerHTML = response.rows[0][0];
    });
    var report2 = ga.getData('ga:revenuePerTransaction').on('success', function (response) {
        document.getElementById('avg_order').innerHTML = "$" + parseFloat(response.rows[0][0]).toFixed(2);
    });
    var report3 = ga.getData('ga:sessions').on('success', function (response) {
        document.getElementById('visits').innerHTML = response.rows[0][0];
    });

    var ga_topProduct = ga.createTable('ga:productName', 'ga:itemRevenue,ga:uniquePurchases', 'TABLE', 'ga_topProduct', '-ga:itemRevenue', 7);
    var ga_category = ga.createChart('ga:productListName', 'ga:itemRevenue', 'PIE', 'ga_category');
    var transactionTbl = ga.createTable('ga:transactionId', 'ga:transactionRevenue,ga:transactionTax,ga:itemQuantity', 'TABLE', 'transactionTbl', '-ga:transactionRevenue', 7);
    var donut = ga.createChart('ga:deviceCategory', 'ga:itemRevenue', 'PIE', 'source', {}, { pieHole: 0.4 });
    var countryDonut = ga.createChart('ga:city', 'ga:transactionRevenue', 'PIE', 'countryDonut', {}, { pieHole: 0.4 });
    var productData = ga.createTable('ga:productName', 'ga:itemRevenue,ga:productAddsToCart,ga:productRemovesFromCart,ga:productCheckouts,ga:productDetailViews,ga:productListClicks,ga:productListViews', 'TABLE', 'productData', '-ga:itemRevenue', 10);
    arr.push(report, report1, report2, report3, ga_topProduct, ga_category, transactionTbl, donut, countryDonut, productData);
    return arr;
}