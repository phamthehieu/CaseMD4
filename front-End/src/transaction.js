
function showTransaction() {
    $("#body").html(`
     <!-- fixed-top-->
    <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-light navbar-bg-color">
        <div class="navbar-wrapper">
            <div class="navbar-header d-md-none">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu font-large-1"></i></a></li>
                    <li class="nav-item d-md-none"><a class="navbar-brand" href="index.html"><img class="brand-logo d-none d-md-block" alt="CryptoDash admin logo" src="../../../app-assets/images/logo/logo.png"><img class="brand-logo d-sm-block d-md-none" alt="CryptoDash admin logo sm" src="../../../app-assets/images/logo/logo-sm.png"></a></li>
                    <li class="nav-item d-md-none"><a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="la la-ellipsis-v">   </i></a></li>
                </ul>
            </div>
            <div class="navbar-container">
                <div class="collapse navbar-collapse" id="navbar-mobile">
                    <ul class="nav navbar-nav mr-auto float-left">
                        <li class="nav-item d-none d-md-block"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu">         </i></a></li>
                        <li class="nav-item nav-search"><a class="nav-link nav-link-search" href="#"><i class="ficon ft-search"></i></a>
                            <div class="search-input">
                                <input class="input" type="text" placeholder="Explore CryptoDash...">
                            </div>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav float-right">                  
                        <li class="dropdown dropdown-notification nav-item">
                            <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">                             
                            </ul>
                        </li>
                        <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="wallet.html"><i class="ficon icon-wallet"></i></a></li>
                        <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"><span class="avatar avatar-online"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar"></span><span class="mr-1">CIC<span class="user-name text-bold-700">3,458.88</span></span></a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="dropdown-divider"></div><a class="dropdown-item" href="account-profile.html"><i class="ft-user"></i> Profile</a><a class="dropdown-item" href="wallet.html"><i class="icon-wallet"></i> My Wallet</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item" href="account-login.html"><i class="ft-power"></i> Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <!-- Nav-->
    <div class="main-menu menu-fixed menu-dark menu-bg-default rounded menu-accordion menu-shadow">
        <div class="main-menu-content"><a class="navigation-brand d-none d-md-block d-lg-block d-xl-block" href="index.html"><img class="brand-logo" alt="CryptoDash admin logo" src="../../../app-assets/images/logo/logo.png"/></a>
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class="active"><a href="../../../html/ltr/vertical-menu/index.html"><i class="icon-grid"></i><span class="menu-title" data-i18n="">Dashboard</span></a>
                </li>
                <li class=" nav-item"><a href="buy-ico.html"><i class="icon-layers"></i><span class="menu-title" data-i18n="">Buy ICO</span></a>
                </li>
                <li class=" nav-item"><a href="wallet.html"><i class="icon-wallet"></i><span class="menu-title" data-i18n="">Wallet</span></a>
                </li>
                <li class=" nav-item"><a href="transactions.html"><i class="icon-shuffle"></i><span class="menu-title" data-i18n="">Transactions</span></a>
                </li>                   
            </ul>
        </div>
    </div>

    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body"><!-- ICO Token &  Distribution-->   
                <!--/ ICO Token &  Distribution-->
                <!-- Purchase token -->
                <div class="row">
                    <div class="col-12">
                        <div class="card pull-up">
                            <div class="card-content collapse show">
                                <div class="card-body">
                                    <form class="form-horizontal form-purchase-token row" action="buy-ico.html">  
                                      <div class="col-md-1 col-12">
                                            <select class="custom-select">
                                                <option selected>THU</option>
                                                <option value="1">CHI</option>                                         
                                            </select>
                                        </div>                                                                                            
                                         <div class="col-md-1 col-12">
                                            <select class="custom-select">
                                                <option selected>ETH</option>
                                                <option value="1">BTC</option>                                         
                                            </select>
                                        </div>
                                         <div class="col-md-4 col-12 mb-1">
                                            <fieldset class="form-label-group mb-0">
                                                <input type="text" class="form-control" id="wallet-address" value=""> 
                                            </fieldset>
                                        </div>
                                        <div class="col-md-2 col-12 text-center">
                                            <button type="submit" class="btn-gradient-secondary">ADD</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
                <div class="row">
                    <div id="recent-transactions" class="col-12">
                        <h6 class="my-2">Recent Transactions</h6>
                        <div class="card">
                            <div class="card-content">
                                <div class="table-responsive">
                                    <table id="recent-orders" class="table table-hover table-xl mb-0">
                                        <thead>
                                        <tr>
                                            <th class="border-top-0">Status</th>                               
                                            <th class="border-top-0">DANH MỤC</th>
                                            <th class="border-top-0">SỐ TIỀN</th>
                                            <th class="border-top-0">Details</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td class="text-truncate"><i class="la la-dot-circle-o success font-medium-1 mr-1"></i> Paid</td>
                                            <td class="text-truncate"><a href="#">2018-01-03</a></td>
                                            <td class="text-truncate">
                                                <a href="#" class="mb-0 btn-sm btn btn-outline-success round">Deposit</a>
                                            </td>
                                            <td class="text-truncate p-1">5.34111</td>
                                            <td>
                                                <i class="cc ETH-alt"></i> ETH
                                            </td>
                                            <td>-</td>
                                            <td class="text-truncate">Deposit to your Balance</td>
                                            <td><i class="la la-thumbs-up warning float-right"></i></td>
                                        </tr>
                                        <tr>
                                            <td class="text-truncate"><i class="la la-dot-circle-o success font-medium-1 mr-1"></i> Paid</td>
                                            <td class="text-truncate"><a href="#">2018-01-03</a></td>
                                            <td class="text-truncate">
                                                <a href="#" class="mb-0 btn-sm btn btn-outline-success round">Deposit</a>
                                            </td>
                                            <td class="text-truncate p-1">5.34111</td>
                                            <td>
                                                <i class="cc ETH-alt"></i> ETH
                                            </td>
                                            <td>3,258</td>
                                            <td class="text-truncate">Tokens Purchase</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td class="text-truncate"><i class="la la-dot-circle-o warning font-medium-1 mr-1"></i> in Process</td>
                                            <td class="text-truncate"><a href="#">2018-01-21</a></td>
                                            <td class="text-truncate">
                                                <a href="#" class="mb-0 btn-sm btn btn-outline-warning round">Referral</a>
                                            </td>
                                            <td class="text-truncate p-1">-</td>
                                            <td>-</td>
                                            <td>200.88</td>
                                            <td class="text-truncate">Referral Promo Bonus</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td class="text-truncate"><i class="la la-dot-circle-o danger font-medium-1 mr-1"></i> Pending</td>
                                            <td class="text-truncate"><a href="#">2018-01-25</a></td>
                                            <td class="text-truncate">
                                                <a href="#" class="mb-0 btn-sm btn btn-outline-danger round">Withdrawal</a>
                                            </td>
                                            <td class="text-truncate p-1">-</td>
                                            <td>-</td>
                                            <td>-3,458.88</td>
                                            <td class="text-truncate">Tokens withdrawn</td>
                                            <td><i class="la la-dollar warning float-right"></i></td>
                                        </tr>
                                        <tr>
                                            <td class="text-truncate"><i class="la la-dot-circle-o success font-medium-1 mr-1"></i> Paid</td>
                                            <td class="text-truncate"><a href="#">2018-01-28</a></td>
                                            <td class="text-truncate">
                                                <a href="#" class="mb-0 btn-sm btn btn-outline-danger round">Deposit</a>
                                            </td>
                                            <td class="text-truncate p-1">0.8791</td>
                                            <td><i class="cc BTC-alt"></i> BTC</td>
                                            <td>--</td>
                                            <td class="text-truncate">Deposit to your Balance</td>
                                            <td><i class="la la-thumbs-up warning float-right"></i></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ Recent Transactions -->
                <!-- Basic Horizontal Timeline -->
                <div class="row match-height">
                    <div class="col-xl-4 col-lg-12">
                        <h6 class="my-2">Latest updates</h6>
                        <div class="card">
                            <div class="card-content">
                                <img class="img-fluid" src="../../../app-assets/images/pages/blog-post.png" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                            <div class="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                                <span class="float-left">3 hours ago</span>
                                <span class="float-right">
                    <a href="#" class="card-link">Read More <i class="fa fa-angle-right"></i></a>
                  </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-12">
                        <h6 class="my-2">Roadmap</h6>
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="card-text">
                                        <section class="cd-horizontal-timeline">
                                            <div class="timeline">
                                                <div class="events-wrapper">
                                                    <div class="events">
                                                        <ol>
                                                            <li><a href="#0" data-date="16/01/2018" class="selected">16 Jan</a></li>
                                                            <li><a href="#0" data-date="28/02/2018">28 Feb</a></li>
                                                            <li><a href="#0" data-date="20/04/2018">20 Mar</a></li>
                                                            <li><a href="#0" data-date="20/05/2018">20 May</a></li>
                                                            <li><a href="#0" data-date="09/07/2018">09 Jul</a></li>
                                                            <li><a href="#0" data-date="30/08/2018">30 Aug</a></li>
                                                            <li><a href="#0" data-date="15/09/2018">15 Sep</a></li>
                                                        </ol>
                                                        <span class="filling-line" aria-hidden="true"></span>
                                                    </div>
                                                    <!-- .events -->
                                                </div>
                                                <!-- .events-wrapper -->
                                                <ul class="cd-timeline-navigation">
                                                    <li><a href="#0" class="prev inactive">Prev</a></li>
                                                    <li><a href="#0" class="next">Next</a></li>
                                                </ul>
                                                <!-- .cd-timeline-navigation -->
                                            </div>
                                            <!-- .timeline -->
                                            <div class="events-content">
                                                <ol>
                                                    <li class="selected" data-date="16/01/2018">
                                                        <blockquote class="blockquote border-0">
                                                            <p class="text-bold-600">CryptoDash platform idea</p>
                                                        </blockquote>
                                                        <p class="lead mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.
                                                        </p>
                                                    </li>
                                                    <li data-date="28/02/2018">
                                                        <blockquote class="blockquote border-0">
                                                            <p class="text-bold-600">Technical & strategy development</p>
                                                        </blockquote>
                                                        <p class="lead mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.
                                                        </p>
                                                    </li>
                                                    <li data-date="20/04/2018">
                                                        <blockquote class="blockquote border-0">
                                                            <p class="text-bold-600">ICO Launched</p>
                                                        </blockquote>
                                                        <p class="lead mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.
                                                        </p>
                                                    </li>
                                                    <li data-date="20/05/2018">
                                                        <blockquote class="blockquote border-0">
                                                            <p class="text-bold-600">CryptoDash beta version launched</p>
                                                        </blockquote>
                                                        <p class="lead mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.
                                                        </p>
                                                    </li>
                                                    <li data-date="09/07/2018">
                                                        <blockquote class="blockquote border-0">
                                                            <p class="text-bold-600">Mobile apps for iOS & Android</p>
                                                        </blockquote>
                                                        <p class="lead mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.
                                                        </p>
                                                    </li>
                                                    <li data-date="30/08/2018">
                                                        <blockquote class="blockquote border-0">
                                                            <p class="text-bold-600">Partnership with business merchant</p>
                                                        </blockquote>
                                                        <p class="lead mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.
                                                        </p>
                                                    </li>
                                                    <li data-date="15/09/2018">
                                                        <blockquote class="blockquote border-0">
                                                            <p class="text-bold-600">Launch live paltform</p>
                                                        </blockquote>
                                                        <p class="lead mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.
                                                        </p>
                                                    </li>
                                                </ol>
                                            </div>
                                            <!-- .events-content -->
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ Basic Horizontal Timeline -->
            </div>
        </div>
    </div>
    `)
}
