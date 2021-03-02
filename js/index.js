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
var ga = {
    CLIENT_ID: '<OUTH CLIENT ID>',
    DAYS: '7daysAgo',
    init() {
        (function (w, d, s, g, js, fjs) {
            g = w.gapi || (w.gapi = {}); g.analytics = { q: [], ready: function (cb) { this.q.push(cb) } };
            js = d.createElement(s); fjs = d.getElementsByTagName(s)[0];
            js.src = 'https://apis.google.com/js/platform.js';
            fjs.parentNode.insertBefore(js, fjs); js.onload = function () { g.load('analytics') };
        }(window, document, 'script'));
    },

    createChart(dimensions, metrics, chartType, container, queryOpt, opt) {
        return new gapi.analytics.googleCharts.DataChart({
            reportType: 'ga',
            query: {
                metrics: metrics,
                dimensions: dimensions,
                'end-date': 'today',
                'start-date': this.DAYS,
                ...queryOpt
            },
            chart: {
                container: container,
                type: chartType,
                options: {
                    fontSize: 12,
                    width: '100%',
                    ...opt
                }
            }
        });

    },
    
    createTable(dimensions, metrics, chartType, container, sortOption, result, opt) {
        return new gapi.analytics.googleCharts.DataChart({
            reportType: 'ga',
            query: {
                'start-date': this.DAYS,
                'end-date': 'today',
                'metrics': metrics,
                'dimensions': dimensions,
                'sort': sortOption,
                'max-results': result
            },
            chart: {
                container: container,
                type: chartType,
                options: {
                    fontSize: 12,
                    ...opt
                }
            }
        });

    },
    
    getData(metrics) {
        return new gapi.analytics.report.Data({
            query: {
                'start-date': this.DAYS,
                'end-date': 'today',
                metrics: metrics
            }
        });
    },

    getDays() {
        var startDate = document.getElementById("startDate").value;
        var endDate = document.getElementById("endDate").value;
        
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        var dateDiff = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
        this.DAYS = dateDiff + "daysAgo";
    }
}
export { ga };