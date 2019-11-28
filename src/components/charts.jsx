import React from 'react'

export default class ChartComponent extends React.Component {


    render() {
        return (
            <div className="container">

                <div class="row cardFour p-3">
                    <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i class="fas fa-users text-primary mr-0 mr-sm-4 icon-lg"></i>

                                <div class="wrapper text-center text-sm-left">
                                    <p class="card-text mb-0">
                                        New Users</p>
                                    <div class="fluid-container">
                                        <h3 class="card-title mb-0">65,650</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i class="fa fa-check-circle-o text-primary mr-0 mr-sm-4 icon-lg"></i>

                                <div class="wrapper text-center text-sm-left">
                                    <p class="card-text mb-0">New Feedbacks</p>
                                    <div class="fluid-container">
                                        <h3 class="card-title mb-0">32,604</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i class="fas fa-trophy text-primary mr-0 mr-sm-4 icon-lg"></i>

                                <div class="wrapper text-center text-sm-left">
                                    <p class="card-text mb-0">Employees</p>
                                    <div class="fluid-container">
                                        <h3 class="card-title mb-0">20,604</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i class="fas fa-line-chart text-primary mr-0 mr-sm-4 icon-lg"></i>
                                <div class="wrapper text-center text-sm-left">
                                    <p class="card-text mb-0">Total Sales</p>
                                    <div class="fluid-container">
                                        <h3 class="card-title mb-0">61,604</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}