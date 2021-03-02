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
export var ecommerceStr = `<div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content ">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="page-header">
                            <h2 class="pageheader-title">E-commerce Dashboard </h2>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card border-3 border-top border-top-primary">
                            <h5 class="card-header">Filters</h5>
                            <div class="card-body">
                                <div class="metric-value d-inline-block">
                                    <!-- <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 dateFields">
                                        <label for="time-period">Select period </label>
                                        <select class="form-control" name="time-period" id="time-period">
                                            <option value="7daysAgo">7 days</option>
                                            <option value="15daysAgo">15 days</option>
                                            <option value="30daysAgo">30 days</option>
                                            <option value="60daysAgo">60 days</option>
                                            <option value="90daysAgo">90 days</option>
                                        </select>
                                    </div>--> 
                                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 dateFields">
                                        <label for="startDate">Start Date :</label>
                                        <input class="form-control" type="date" id="startDate" name="startDate">
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 dateFields">
                                        <label for="endDate">End Date :</label>
                                        <input class="form-control" type="date" id="endDate" name="endDate">
                                    </div>
                                    <button id="getDaysButton" class="btn btn-primary filter">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ecommerce-widget">
                    <div class="row">
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div class="card border-3 border-top">
                                <h5 class="card-header">Total Visits</h5>
                                <div class="card-body">
                                    <div class="metric-value d-inline-block">
                                        <h1 class="mb-1" id="visits"></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div class="card border-3 border-top">
                                <h5 class="card-header">Total Orders</h5>
                                <div class="card-body">
                                    <div class="metric-value d-inline-block">
                                        <h1 class="mb-1" id="orders"></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div class="card border-3 border-top">
                                <h5 class="card-header">Revenue</h5>
                                <div class="card-body">
                                    <div class="metric-value d-inline-block">
                                        <h1 class="mb-1" id="total_revenue"></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div class="card border-3 border-top">
                            <h5 class="card-header">Average order value</h5>
                                <div class="card-body">
                                    <div class="metric-value d-inline-block">
                                        <h1 class="mb-1" id="avg_order"></h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Revenue by Category</h5>
                                <div class="card-body">
                                    <div id="ga_category"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header"> Top Selling Products</h5>
                                <div class="card-body">
                                    <div id="ga_topProduct"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class=" col-lg-3 col-md-4 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Sales By Country</h5>
                                <div class="card-body p-0">
                                    <div id="countryDonut">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" col-lg-6 col-md-4 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Recent Orders</h5>
                                <div class="card-body p-0">
                                    <div class="table-responsive" id="transactionTbl">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Sales By Traffic Source</h5>
                                <div class="card-body">
                                    <div class="ct-chart" id="source"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class=" col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Product Performance</h5>
                                <div class="card-body p-0">
                                    <div class="table-responsive" id="productData">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;