import React from 'react'

export default class ContentDisplayComponent extends React.Component {


    render() {
        return (
            <div className="container">

                <div className="row cardFour p-3">
                    <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i className="fas fa-users text-primary mr-0 mr-sm-4 icon-lg"></i>

                                <div className="wrapper text-center text-sm-left">
                                    <p className="card-text mb-0">
                                        New Users</p>
                                    <div className="fluid-container">
                                        <h3 className="card-title mb-0">65,650</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i className="fa fa-check-circle-o text-primary mr-0 mr-sm-4 icon-lg"></i>

                                <div className="wrapper text-center text-sm-left">
                                    <p className="card-text mb-0">New Feedbacks</p>
                                    <div className="fluid-container">
                                        <h3 className="card-title mb-0">32,604</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i className="fas fa-trophy text-primary mr-0 mr-sm-4 icon-lg"></i>

                                <div className="wrapper text-center text-sm-left">
                                    <p className="card-text mb-0">Employees</p>
                                    <div className="fluid-container">
                                        <h3 className="card-title mb-0">20,604</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i className="fas fa-line-chart text-primary mr-0 mr-sm-4 icon-lg"></i>
                                <div className="wrapper text-center text-sm-left">
                                    <p className="card-text mb-0">Total Sales</p>
                                    <div className="fluid-container">
                                        <h3 className="card-title mb-0">61,604</h3>
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