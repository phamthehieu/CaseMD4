
function showTransaction(id) {
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
          <li class="active"><a onclick="showWallet()"><i class="icon-wallet"></i>Wallet</a>
          </li>
          <li class=" nav-item"><a onclick="showFormProfile()"><i class="ft-user"></i> Profile</span></a>
          <li class=" nav-item"> <a onclick="logOut()"><i class="ft-power"></i> Log Out</a></li>  
        </ul>
      </div>
    </div>
    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <div class="row">
                    <div class="col-2" style="margin-bottom: 10px">
                        <div>
                            <div class=" collapse show">
                                <div class="card-body">
                                    <form class="form-horizontal form-purchase-token row">
                                      <div class="col-md-12 col-12 text-center">  
                                             <button class=" btn-gradient-secondary" data-bs-toggle="modal1" data-bs-target="#transactionModal">ADD Transaction</button>
                            <div class="modal fade" id="transactionModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="input-group flex-nowrap">
                                            <span class="input-group-text" >Name Wallet</span>
                                            <input type="text" class="form-control" id="nameWallet" value="" >
                                        </div>
                                        <br>
                                        <div class="input-group flex-nowrap">
                                            <span class="input-group-text" >money</span>
                                            <input type="text" class="form-control" id="money" value="" >
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Save Wallet</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                                        </div>  
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content collapse show">
                                <div class="card-body">
                                    <form class="form-horizontal form-purchase-token row">          
                                      <div class="col-md-2 col-12">
                                           <div class="row g-3 align-items-center">
                                               <div class="col-auto">
                                                 <label for="inputPassword6" class="col-form-label">Loai</label>
                                               </div>
                                              <div class="col-8">
                                               <select class="custom-select">
                                                <option value="">THU</option>
                                                <option value="1">CHI</option>                                         
                                            </select>
                                              </div>
                                            </div>  
                                        </div> 
                                        <div class="col-md-2 col-12">
                                         <div class="row g-3 align-items-center">
                                               <div class="col-auto">
                                                 <label for="inputPassword6" class="col-form-label">Danh Muc</label>
                                               </div>
                                              <div class="col-8">
                                               <select class="custom-select">
                                                <option value="">THU</option>
                                                <option value="1">CHI</option>                                         
                                            </select>
                                              </div>
                                            </div>                                     
                                        </div>                                                                                            
                                         <div class="col-md-4 col-12 mb-1">
                                           <div class="row g-3 align-items-center">
                                               <div class="col-auto">
                                                 <label for="inputPassword6" class="col-form-label">Money</label>
                                               </div>
                                              <div class="col-auto">
                                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                                              </div>
                                              <div class="col-auto">
                                                <span id="passwordHelpInline" class="form-text">
                                                  Thêm Tiền Cho Danh Mục Này
                                                </span>
                                              </div>
                                            </div>
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
                        <h6 class="my-2">Wallet Transactions</h6>
                        <div class="card">
                            <div class="card-content">
                                <div class="table-responsive">
                                    <table id="recent-orders" class="table table-hover table-xl mb-0">
                                        <thead>
                                        <tr>
                                            <th class="border-top-0">Status</th>                               
                                            <th class="border-top-0">DANH MỤC</th>
                                            <th class="border-top-0">SỐ TIỀN</th>
                                            <th class="border-top-0" colspan="2"></th>
                                        </tr>
                                        </thead>
                                        <tbody id="listTransactions">
                                        
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
    showListTransactions(id)
}
function showListTransactions(id) {
    let users = JSON.parse(localStorage.getItem('token'))
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/transactions/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        success : (transactions) => {
            let html = ''
            transactions.map(item => {
                html += `
                <tr>
                   <td class="text-truncate"><i class="la la-cart-plus success font-medium-1 mr-1"></i> ${item.type}</td>
                    <td class="text-truncate">
                        <p>${item.nameCategory}</p>
                            </td>
                              <td class="text-truncate">
                                 <p>${item.money} <i class="la la-dollar success font-medium-1 mr-1"></i></p>
                              </td>
                              <td>
                                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal${item.idWallet}">Edit</button>
                                      <div class="modal fade" id="editModal${item.idWallet}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                           <div class="modal-dialog modal-lg">
                                                 <div class="modal-content">
                                                      <div class="modal-header">
                                                           <h1 class="modal-title fs-5" id="exampleModalLabel">Edit ${item.nameWallet}</h1>
                                                           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                      </div>
                                                      <div class="modal-body">
                                                          <div class="input-group flex-nowrap">
                                                              <span class="input-group-text" id="addon-wrapping">Name</span>
                                                              <input type="text" class="form-control" id="nameWallet${item.idWallet}" value="${item.nameWallet}" aria-label="Username" aria-describedby="addon-wrapping">
                                                          </div>
                                                                <br>
                                                                <div class="input-group flex-nowrap">
                                                                    <span class="input-group-text" id="addon-wrapping">Price VND</span>
                                                                    <input type="text" class="form-control" id="money${item.idWallet}" value="${item.money}" aria-label="Username" aria-describedby="addon-wrapping">
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="editWallet(${item.idWallet})">Save</button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </td>
                                            <td>
                                             <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal${item.idWallet}">Delete</button>
                                                <div class="modal fade" id="deleteModal${item.idWallet}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Delete ${item.nameWallet}</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Are you sure you want to delete???
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="deleteWallet(${item.idWallet})">Yes</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </td>             
                                        </tr>
                `})
            $("#listTransactions").html(html)
        }
    })
}
