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
export var basicStr = `<div class="dashboard-ecommerce">
<div class="container-fluid dashboard-content ">
    <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="page-header">
                <h2 class="pageheader-title">Basic Dashboard </h2>

            </div>
        </div>
    </div>
    <div class="ecommerce-widget">
        <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header">Your Audience</h5>
                    <div class="card-body">
                        <div id="ga_audience"></div>
                        <div id="ga_audience_data">
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div class="card-body">
                                        <h5 class="text-muted">Users</h5>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1" id="ga_users"></h1>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div class="card-body">
                                        <h5 class="text-muted">New Users</h5>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1" id="ga_newusers"></h1>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div class="card-body">
                                        <h5 class="text-muted">No. Sessions Per User</h5>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1" id="ga_noSession"></h1>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div class="card-body">
                                        <h5 class="text-muted">Sessions</h5>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1" id="ga_sessions"></h1>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div class="card-body">
                                        <h5 class="text-muted">PageViews</h5>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1" id="ga_pageViews"></h1>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div class="card-body">
                                        <h5 class="text-muted">Pages/Sessions</h5>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1" id="ga_pages"></h1>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div class="card-body">
                                        <h5 class="text-muted">Avg.Session Duration</h5>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1" id="ga_avgduration"></h1>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div class="card-body">
                                        <h5 class="text-muted">Bounce Rate</h5>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1" id="ga_BounceRate"></h1>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header"> User Types</h5>
                    <div class="card-body">
                        <div id="ga_usertype"></div>
                        <div id="ga_newuserchart"></div>
                    </div>

                </div>
            </div>
        </div>
        <div class="row">
            <!-- <div class=" col-lg-4 col-md-4 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header">Language breakdown</h5>
                    <div class="card-body p-0">
                        <div id="ga_language"></div>
                        <div id="ga_languageTbl"></div>
                    </div>
                </div>
            </div> -->
            <div class=" col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header"> User Session </h5>
                    <div class="card-body p-0">
                        <div id="ga_usersessionChart">
                        </div>
                        <div id="ga_usersessiontbl">
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-lg-4 col-md-4 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header">Country</h5>
                    <div class="card-body p-0">
                        <div id="ga_country"> </div>
                        <div id="ga_countryTbl"> </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header">Devices Used</h5>
                    <div class="card-body">
                        <div id="ga_device"></div>
                        <div id="ga_deviceTbl"></div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class=" col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header">Popular Page with Category Breakdown</h5>
                    <div class="card-body p-0">
                        <div id="ga_pagesChart">
                        </div>
                        <div id="ga_pagestbl">
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header">Top Events </h5>
                    <div class="card-body p-0">
                        <div id="ga_eventChart">
                        </div>
                        <div id="ga_eventtbl">
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header">Top Search term used</h5>
                    <div class="card-body p-0">
                        <div id="ga_searchChart">
                        </div>
                        <div id="ga_searchtbl">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">

            <div class=" col-lg-5 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header"> Popular Pages with Title Breakdown</h5>
                    <div class="card-body p-0">
                        <div id="ga_pagetitleChart">
                        </div>
                        <div id="ga_pagetitletbl">
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-lg-7 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header"> Popular Pages </h5>
                    <div class="card-body p-0">
                        <div id="ga_pagepathbl">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</div>
`