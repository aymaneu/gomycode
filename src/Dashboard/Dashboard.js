import React from 'react'
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            
            <div className="container-fluid display-table">
        <div className="row display-table-row">
            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                <div className="logo">
                    <a hef="home.html" >
                        <h3 className="title">Anime-site </h3>
                    </a>
                </div>
                <div class="navi">
                    <ul>
                        <li className="active"><a href="#"><i class="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></a></li>
                        
                        <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Users</span></a></li>
                        <li><a href="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
                
                <div className="row">
                    <header>
                        <div className="col-md-7">
                            <nav className="navbar-default pull-left">
                                <div className="navbar-header">

                                    
                                </div>
                            </nav>
                            <div className="search hidden-xs hidden-sm">
                                <input type="text" placeholder="Search" id="search"/>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="header-rightside">
                                <ul className="list-inline header-top pull-right">
                                    <li className="hidden-xs"><a href="#" class="add-project" data-toggle="modal" data-target="#add_project">Add Movie</a></li>
                                    
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fas fa-user-secret"></i>
                                            <b className="caret"></b></a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <div className="navbar-content">
                                                    <span>JS Krishna</span>
                                                    <p className="text-muted small">
                                                        me@jskrishna.com
                                                    </p>
                                                    <div className="divider">
                                                    </div>
                                                    <a href="#" className="view btn-sm active">View Profile</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="user-dashboard">
                    

                    
                    </div>
                    
                    <div className="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
                          <div className="modal-dialog">
                        <div className="modal-content">
                              <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                            <h4 className="modal-title custom_align" id="Heading">Edit Your Detail</h4>
                          </div>
                              <div className="modal-body">
                              <div className="form-group">
                            <input className="form-control " type="text" placeholder="Mohsin"/>
                            </div>
                            <div className="form-group">
                            
                            <input className="form-control " type="text" placeholder="Irshad"/>
                            </div>
                            <div className="form-group">
                            <textarea rows="2" className="form-control" placeholder="CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"></textarea>
                        
                            
                            </div>
                          </div>
                              <div className="modal-footer ">
                            <button type="button" className="btn btn-warning btn-lg" style={{width: "100%"}}><span className="glyphicon glyphicon-ok-sign"></span> Update</button>
                          </div>
                            </div>






                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Dashboard
