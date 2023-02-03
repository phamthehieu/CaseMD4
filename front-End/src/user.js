
function showLogin() {
    $("#body").html(`
    <!-- ////////////////////////////////////////////////////////////////////////////-->
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body"><section id="account-login" class="flexbox-container">    
    <div class="col-12 d-flex align-items-center justify-content-center">
        <!-- image -->
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-12 p-0 text-center d-none d-md-block">
            <div class="border-grey border-lighten-3 m-0 box-shadow-0 card-account-left height-400">
                <img src="../../../app-assets/images/pages/account-login.png" class="card-account-img width-200" alt="card-account-img">
            </div>
        </div>
        <!-- login form -->
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-12 p-0">
            <div class="card border-grey border-lighten-3 m-0 box-shadow-0 card-account-right height-400">                
                <div class="card-content">                    
                    <div class="card-body p-3">
                        <p class="text-center h5 text-capitalize">Welcome to HKT!</p>                                                            
                                <label for="user-name">Username</label>    
                                <input type="text" class="form-control" id="userName" placeholder="Your Username">
                                <label for="user-password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter Password">                         
                            <button class="btn-gradient-primary btn-block my-1" onclick="login()">Log In</button>
                             <button class="btn-gradient-primary btn-block my-1" onclick="showRegister()">Register</button>
                    </div>                      
                </div>
            </div>
        </div>        
    </div>    
</section>

        </div>
      </div>
    </div>
    `)
}
function showRegister() {
    $('#body').html(`
        <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body"><section id="account-register" class="flexbox-container">    
    <div class="col-12 d-flex align-items-center justify-content-center">
        <!-- image -->
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-12 p-0 text-center d-none d-md-block">
            <div class="border-grey border-lighten-3 m-0 box-shadow-0 card-account-left height-400">
                <img src="../../../app-assets/images/pages/account-login.png" class="card-account-img width-200" alt="card-account-img">
            </div>
        </div>
        <!-- login form -->
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-12 p-0">
            <div class="card border-grey border-lighten-3 m-0 box-shadow-0 card-account-right height-400">                
                <div class="card-content">                    
                    <div class="card-body p-3">  
                     <p class="text-center h5 text-capitalize">Register to HKT!</p>
                                <label>Username</label>       
                                <input type="text" class="form-control" id="userName" placeholder="Your Username">                       
                                <label>Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Your password"> 
                                <label>Full Name</label>           
                                <input type="text" class="form-control" id="fullName" placeholder="Full Name">                                  
                            <button onclick="register()" class="btn-gradient-primary btn-block my-1" >Sign Up</button>
                             <button type="submit" class="btn-gradient-primary btn-block my-1" onclick="showLogin()">Log In</button>
                        
                    </div>                    
                </div>
            </div>
        </div>        
    </div>    
</section>
        </div>
      </div>
    </div>
    `)
}
function login() {
    let userName = $("#userName").val()
    let password = $("#password").val()
    let user = {
        userName: userName,
        password: password
    }
    $.ajax({
        type: 'POST',
        url: "http://localhost:3000/auth/login",
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(user),
        success : (token) => {
            if (token === 'Password does not match') {
                alert("Password does not match")
            } else {
                localStorage.setItem('token',token.token)
                showWallet()
            }
        }
    })
}
function register() {
    let userName = $("#userName").val()
    let password = $("#password").val()
    let fullName = $("#fullName").val()
    let user = {
        userName: userName,
        password: password,
        fullName: fullName
    }
    $.ajax({
        type: 'POST',
        url: "http://localhost:3000/auth/register",
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(user),
        success : () => {
                showLogin()
        }
    })
}
function logOut() {
    localStorage.clear()
    showLogin()
}
function showFormProfile() {
    $("#body").html(`
    <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-light navbar-bg-color">
        <div class="navbar-wrapper">
            <div class="navbar-header d-md-none">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu font-large-1"></i></a></li>
                    <li class="nav-item d-md-none"><button onclick="showWallet()"><img class="brand-logo d-none d-md-block" alt="CryptoDash admin logo" src="../../../app-assets/images/logo/logo.png"><img class="brand-logo d-sm-block d-md-none" alt="CryptoDash admin logo sm" src="../../../app-assets/images/logo/logo-sm.png"></button></li>
                    <li class="nav-item d-md-none"><a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="la la-ellipsis-v">   </i></a></li>
                </ul>
            </div>
            <div class="navbar-container">
                <div class="collapse navbar-collapse" id="navbar-mobile">
                    <ul class="nav navbar-nav mr-auto float-left">
                        <li class="nav-item d-none d-md-block"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu"></i></a></li>
                        <li class="nav-item nav-search"><a class="nav-link nav-link-search" href="#"><i class="ficon ft-search"></i></a>
                            <div class="search-input">
                                <input class="input" type="text" placeholder="Explore CryptoDash...">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="main-menu menu-fixed menu-dark menu-bg-default rounded menu-accordion menu-shadow">
        <div class="main-menu-content"><a class="navigation-brand d-none d-md-block d-lg-block d-xl-block" href="index.html"><img class="brand-logo" alt="CryptoDash admin logo" src="../../../app-assets/images/logo/logo.png"/></a>
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class="active"><a href="wallet.html"><i class="icon-wallet"></i>Wallet</a>
                </li>
                <li class=" nav-item"><a href="transactions.html"><i class="ft-user"></i> Profile</span></a>
                <li class=" nav-item"> <a onclick="logOut()"><i class="ft-power"></i> Log Out</a></li>
            </ul>
        </div>
    </div>
    <div class="app-content content">
    <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-8 col-12 mb-2 breadcrumb-new">
            <h3 class="content-header-title mb-0 d-inline-block">Account Profile</h3>
            <div class="row breadcrumbs-top d-inline-block">
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Account Profile
                  </li>
                </ol>
              </div>
            </div>
          </div>      
        </div>
        <div class="content-body"><div class="row">
    <div class="col-12 col-md-8">
        <!-- User Profile -->
        <section class="card">
            <div class="card-content">
                <div class="card-body">
                    <div class="col-12">
                        <div class="row">                          
                            <div class="col-md-10 col-12">
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="text" class="form-control" id="first-name" value="John">
                                            <label for="first-name">userName</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="text" class="form-control" id="last-name" value="Doe">
                                            <label for="last-name">FullName</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="password" class="form-control" id="old-password" value="password">
                                            <label for="old-password">Old password</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-12 text-right">
                                         <div class="btn-group float-md-right"><a class="btn-gradient-secondary btn-sm white" onclick="showEditProfile()">Edit</a></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="col-12 col-md-4">
        <div class="card">
            <div class="card-header">
                <h6 class="card-title text-center">ICO Tokens</h6>
            </div>
            <div class="card-content collapse show">
                <div class="card-body">
                    <div class="text-center row clearfix mb-2">
                        <div class="col-12">
                            <i class="icon-layers font-large-3 bg-warning bg-glow white rounded-circle p-3 d-inline-block"></i>
                        </div>
                    </div>
                    <h3 class="text-center">3,458.88 CIC</h3>
                </div>
                <div class="table-responsive">
                    <table class="table table-de mb-0">
                        <tbody>
                            <tr>
                                <td>CIC Token</td>
                                <td><i class="icon-layers"></i> 3,258 CIC</td>
                            </tr>
                            <tr>
                                <td>CIC Referral</td>
                                <td><i class="icon-layers"></i> 200.88 CIC</td>
                            </tr>
                            <tr>
                                <td>CIC Price</td>
                                <td><i class="cc BTC-alt"></i> 0.0001 BTC</td>
                            </tr>
                            <tr>
                                <td>Raised BTC</td>
                                <td><i class="cc BTC-alt"></i> 2154 BTC</td>
                            </tr>
                            <tr>
                                <td>Raised USD</td>
                                <td><i class="la la-dollar"></i> 4.52 M</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="card">
        <div class="card-header">
            <h6 class="card-title text-center">Token sale progress</h6>
        </div>
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
        </div>
      </div>
    </div>
    `)
}
function showEditProfile() {
    $("#body").html(`
    <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-light navbar-bg-color">
        <div class="navbar-wrapper">
            <div class="navbar-header d-md-none">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu font-large-1"></i></a></li>
                    <li class="nav-item d-md-none"><button onclick="showWallet()"><img class="brand-logo d-none d-md-block" alt="CryptoDash admin logo" src="../../../app-assets/images/logo/logo.png"><img class="brand-logo d-sm-block d-md-none" alt="CryptoDash admin logo sm" src="../../../app-assets/images/logo/logo-sm.png"></button></li>
                    <li class="nav-item d-md-none"><a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="la la-ellipsis-v">   </i></a></li>
                </ul>
            </div>
            <div class="navbar-container">
                <div class="collapse navbar-collapse" id="navbar-mobile">
                    <ul class="nav navbar-nav mr-auto float-left">
                        <li class="nav-item d-none d-md-block"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu"></i></a></li>
                        <li class="nav-item nav-search"><a class="nav-link nav-link-search" href="#"><i class="ficon ft-search"></i></a>
                            <div class="search-input">
                                <input class="input" type="text" placeholder="Explore CryptoDash...">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="main-menu menu-fixed menu-dark menu-bg-default rounded menu-accordion menu-shadow">
        <div class="main-menu-content"><a class="navigation-brand d-none d-md-block d-lg-block d-xl-block" href="index.html"><img class="brand-logo" alt="CryptoDash admin logo" src="../../../app-assets/images/logo/logo.png"/></a>
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class="active"><a href="wallet.html"><i class="icon-wallet"></i>Wallet</a>
                </li>
                <li class=" nav-item"><a href="transactions.html"><i class="ft-user"></i> Profile</span></a>
                <li class=" nav-item"> <a onclick="logOut()"><i class="ft-power"></i> Log Out</a></li>
            </ul>
        </div>
    </div>
    <div class="app-content content">
    <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-8 col-12 mb-2 breadcrumb-new">
            <h3 class="content-header-title mb-0 d-inline-block">Account Profile</h3>
            <div class="row breadcrumbs-top d-inline-block">
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Account Profile
                  </li>
                </ol>
              </div>
            </div>
          </div>      
        </div>
        <div class="content-body"><div class="row">
    <div class="col-12 col-md-8">
        <!-- User Profile -->
        <section class="card">
            <div class="card-content">
                <div class="card-body">
                    <div class="col-12">
                        <div class="row">                          
                            <div class="col-md-10 col-12">
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="text" class="form-control" id="first-name" value="John">
                                            <label for="first-name">userName</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="text" class="form-control" id="last-name" value="Doe">
                                            <label for="last-name">FullName</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="password" class="form-control" id="old-password" value="password">
                                            <label for="old-password">Old password</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-12 text-right">
                                         <div class="btn-group float-md-right"><a class="btn-gradient-secondary btn-sm white" href="wallet.html">SAVE</a></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="col-12 col-md-4">
        <div class="card">
            <div class="card-header">
                <h6 class="card-title text-center">ICO Tokens</h6>
            </div>
            <div class="card-content collapse show">
                <div class="card-body">
                    <div class="text-center row clearfix mb-2">
                        <div class="col-12">
                            <i class="icon-layers font-large-3 bg-warning bg-glow white rounded-circle p-3 d-inline-block"></i>
                        </div>
                    </div>
                    <h3 class="text-center">3,458.88 CIC</h3>
                </div>
                <div class="table-responsive">
                    <table class="table table-de mb-0">
                        <tbody>
                            <tr>
                                <td>CIC Token</td>
                                <td><i class="icon-layers"></i> 3,258 CIC</td>
                            </tr>
                            <tr>
                                <td>CIC Referral</td>
                                <td><i class="icon-layers"></i> 200.88 CIC</td>
                            </tr>
                            <tr>
                                <td>CIC Price</td>
                                <td><i class="cc BTC-alt"></i> 0.0001 BTC</td>
                            </tr>
                            <tr>
                                <td>Raised BTC</td>
                                <td><i class="cc BTC-alt"></i> 2154 BTC</td>
                            </tr>
                            <tr>
                                <td>Raised USD</td>
                                <td><i class="la la-dollar"></i> 4.52 M</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="card">
        <div class="card-header">
            <h6 class="card-title text-center">Token sale progress</h6>
        </div>
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
        </div>
      </div>
    </div>
    `)
}