showHome()
function showHome() {
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
                        <li class="dropdown dropdown-language nav-item"><a class="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="flag-icon flag-icon-gb"></i><span class="selected-language"></span></a>
                            <div class="dropdown-menu" aria-labelledby="dropdown-flag"><a class="dropdown-item" href="#"><i class="flag-icon flag-icon-gb"></i> English</a><a class="dropdown-item" href="#"><i class="flag-icon flag-icon-fr"></i> French</a><a class="dropdown-item" href="#"><i class="flag-icon flag-icon-cn"></i> Chinese</a><a class="dropdown-item" href="#"><i class="flag-icon flag-icon-de"></i> German</a></div>
                        </li>
                        <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="#" data-toggle="dropdown"><i class="ficon ft-bell"></i><span class="badge badge-pill badge-default badge-danger badge-default badge-up badge-glow">5</span></a>
                            <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                                <li class="dropdown-menu-header">
                                    <h6 class="dropdown-header m-0"><span class="grey darken-2">Notifications</span></h6><span class="notification-tag badge badge-default badge-danger float-right m-0">5 New</span>
                                </li>
                                <li class="scrollable-container media-list w-100"><a href="javascript:void(0)">
                                    <div class="media">
                                        <div class="media-left align-self-center"><i class="ft-plus-square icon-bg-circle bg-cyan"></i></div>
                                        <div class="media-body">
                                            <h6 class="media-heading">You have new order!</h6>
                                            <p class="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p><small>
                                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">30 minutes ago</time></small>
                                        </div>
                                    </div></a><a href="javascript:void(0)">
                                    <div class="media">
                                        <div class="media-left align-self-center"><i class="ft-download-cloud icon-bg-circle bg-red bg-darken-1"></i></div>
                                        <div class="media-body">
                                            <h6 class="media-heading red darken-1">99% Server load</h6>
                                            <p class="notification-text font-small-3 text-muted">Aliquam tincidunt mauris eu risus.</p><small>
                                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Five hour ago</time></small>
                                        </div>
                                    </div></a><a href="javascript:void(0)">
                                    <div class="media">
                                        <div class="media-left align-self-center"><i class="ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3"></i></div>
                                        <div class="media-body">
                                            <h6 class="media-heading yellow darken-3">Warning notifixation</h6>
                                            <p class="notification-text font-small-3 text-muted">Vestibulum auctor dapibus neque.</p><small>
                                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Today</time></small>
                                        </div>
                                    </div></a><a href="javascript:void(0)">
                                    <div class="media">
                                        <div class="media-left align-self-center"><i class="ft-check-circle icon-bg-circle bg-cyan"></i></div>
                                        <div class="media-body">
                                            <h6 class="media-heading">Complete the task</h6><small>
                                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Last week</time></small>
                                        </div>
                                    </div></a><a href="javascript:void(0)">
                                    <div class="media">
                                        <div class="media-left align-self-center"><i class="ft-file icon-bg-circle bg-teal"></i></div>
                                        <div class="media-body">
                                            <h6 class="media-heading">Generate monthly report</h6><small>
                                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Last month</time></small>
                                        </div>
                                    </div></a></li>
                                <li class="dropdown-menu-footer"><a class="dropdown-item text-muted text-center" href="javascript:void(0)">Read all notifications</a></li>
                            </ul>
                        </li>
                        <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="wallet.html"><i class="ficon icon-wallet"></i></a></li>
                        <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">             <span class="avatar avatar-online"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar"></span><span class="mr-1">CIC<span class="user-name text-bold-700">3,458.88</span></span></a>
                            <div class="dropdown-menu dropdown-menu-right">             <a class="dropdown-item" href="account-profile.html"><i class="ft-award"></i>John Doe</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item" href="account-profile.html"><i class="ft-user"></i> Profile</a><a class="dropdown-item" href="wallet.html"><i class="icon-wallet"></i> My Wallet</a><a class="dropdown-item" href="transactions.html"><i class="ft-check-square"></i> Transactions              </a>
                                <div class="dropdown-divider"></div><a class="dropdown-item" href="account-login.html"><i class="ft-power"></i> Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <!-- ////////////////////////////////////////////////////////////////////////////-->


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
                <li class=" nav-item"><a href="faq.html"><i class="icon-support"></i><span class="menu-title" data-i18n="">FAQ</span></a>
                </li>
                <li class=" nav-item"><a href="#"><i class="icon-user-following"></i><span class="menu-title" data-i18n="">Account</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="account-profile.html">Profile</a>
                        </li>
                        <li><a class="menu-item" href="account-login-history.html">Login History</a>
                        </li>
                        <li class="navigation-divider"></li>
                        <li><a class="menu-item" href="#">Misc</a>
                            <ul class="menu-content">
                                <li><a class="menu-item" href="account-login.html">Login</a>
                                </li>
                                <li><a class="menu-item" href="account-register.html">Register</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body"><!-- ICO Token &  Distribution-->
                <div class="row match-height">
                    <div class="col-xl-8 col-12">
                        <div class="card card-transparent">
                            <div class="card-header card-header-transparent py-20">
                                <div class="btn-group dropdown">
                                    <h6>ICO Token (Supply & Demand)</h6>
                                </div>
                            </div>
                            <div id="ico-token-supply-demand-chart" class="height-300"></div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-12">
                        <div class="card card-transparent">
                            <div class="card-header card-header-transparent">
                                <h6 class="card-title">Token distribution</h6>
                            </div>
                            <div class="card-content">
                                <div id="token-distribution-chart" class="height-200 donut donutShadow"></div>
                                <div class="card-body">
                                    <div class="row mx-0">
                                        <ul class="token-distribution-list col-md-6 mb-0">
                                            <li class="crowd-sale">Crowd sale <span class="float-right text-muted">41%</span></li>
                                            <li class="team">Team <span class="float-right text-muted">18%</span></li>
                                            <li class="advisors">Advisors <span class="float-right text-muted">15%</span></li>
                                        </ul>
                                        <ul class="token-distribution-list col-md-6 mb-0">
                                            <li class="project-reserve">Project <span class="float-right text-muted">10%</span></li>
                                            <li class="master-nodes">Master nodes <span class="float-right text-muted">8%</span></li>
                                            <li class="program">Program <span class="float-right text-muted">8%</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ ICO Token &  Distribution-->
                <!-- Purchase token -->
                <div class="row">
                    <div class="col-12">
                        <div class="card pull-up">
                            <div class="card-content collapse show">
                                <div class="card-body">
                                    <form class="form-horizontal form-purchase-token row" action="buy-ico.html">
                                        <div class="col-md-2 col-12">
                                            <fieldset class="form-label-group mb-0">
                                                <input type="text" class="form-control" id="ico-token" value="5000" required="" autofocus="">
                                                <label for="ico-token">ICO Token</label>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-1 col-12 text-center">
                                            <span class="la la-arrow-right"></span>
                                        </div>
                                        <div class="col-md-2 col-12">
                                            <fieldset class="form-label-group mb-0">
                                                <input type="text" class="form-control" id="selected-crypto" value="1" required="" autofocus="">
                                                <label for="selected-crypto">ETH</label>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-1 col-12">
                                            <select class="custom-select">
                                                <option selected>ETH</option>
                                                <option value="1">BTC</option>
                                                <option value="2">LTC</option>
                                                <option value="3">USDT</option>
                                                <option value="3">Credit Card</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4 col-12 mb-1">
                                            <fieldset class="form-label-group mb-0">
                                                <input type="text" class="form-control" id="wallet-address" value="0xe834a970619218d0a7db4ee5a3c87022e71e177f" required="" autofocus="">
                                                <label for="wallet-address">Wallet address</label>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-2 col-12 text-center">
                                            <button type="submit" class="btn-gradient-secondary">Buy now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ Purchase token -->
                <!-- ICO Token balance & sale progress -->
                <div class="row">
                    <div class="col-md-8 col-12">
                        <h6 class="my-2">ICO Token balance</h6>
                        <div class="card pull-up">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-md-8 col-12">
                                                <p><strong>Your balance:</strong></p>
                                                <h1>3,458.88 CIC</h1>
                                                <p class="mb-0">Welcome bonus <strong>+30%</strong> expires in 21 days.</p>
                                            </div>
                                            <div class="col-md-4 col-12 text-center text-md-right">
                                                <button type="button" class="btn-gradient-secondary mt-2">Withdraw <i class="la la-angle-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <h6 class="my-2">Token sale progress</h6>
                        <div class="card">
                            <div class="card-content collapse show">
                                <div class="card-body">
                                    <div class="font-small-3 clearfix">
                                        <span class="float-left">$0</span>
                                        <span class="float-right">$5M</span>
                                    </div>
                                    <div class="progress progress-sm my-1 box-shadow-2">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="font-small-3 clearfix">
                                        <span class="float-left">Distributed <br> <strong>6,235,125 CIC</strong></span>
                                        <span class="float-right text-right">Contributed  <br> <strong>5478 ETH | 80 BTC</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ ICO Token balance & sale progress -->
                <!-- Recent Transactions -->
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
                                            <th class="border-top-0">Date</th>
                                            <th class="border-top-0">Amount</th>
                                            <th class="border-top-0">Currency</th>
                                            <th class="border-top-0">Currency</th>
                                            <th class="border-top-0">Tokens (CIC)</th>
                                            <th class="border-top-0">Details</th>
                                            <th class="border-top-0"></th>
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
    <!-- ////////////////////////////////////////////////////////////////////////////-->
    <footer class="footer footer-static footer-transparent">
        <p class="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2"><span class="float-md-left d-block d-md-inline-block">Copyright  &copy; <script>
          document.write(new Date().getFullYear())
          </script> <a class="text-bold-800 grey darken-2" href="https://themeselection.com/" target="_blank">ThemeSelection </a>, All rights reserved. </span><span class="float-md-right d-block d-md-inline-blockd-none d-lg-block">Hand-crafted & Made with <i class="ft-heart pink"></i></span></p>
    </footer>
    `)
}