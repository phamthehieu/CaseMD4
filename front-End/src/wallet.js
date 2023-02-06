
function showWallet() {
    let user = localStorage.getItem('token')
    let users = JSON.parse(localStorage.getItem('token'))
    if (user) {
      if (users.role === 'user') {
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
              <li>         
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
          <div class="content-header-left col-md-1 col-12 mb-2 breadcrumb-new">
            <h3 class="content-header-title mb-0 d-inline-block">Wallet</h3>
          </div>
          <div class="content-header-right col-md-11 col-12">
            <div class="btn-group float-md-left">           
              <div class="btn-group float-md-left">
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createModal">ADD WALLET</button>
                            <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD WALLET</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="input-group flex-nowrap">
                                            <span class="input-group-text" id="addon-wrapping">Name</span>
                                            <input type="text" class="form-control" id="nameWallet"  aria-describedby="addon-wrapping">
                                        </div>
                                        <br>
                                        <div class="input-group flex-nowrap">
                                            <span class="input-group-text" id="addon-wrapping">MONEY VND</span>
                                            <input type="text" class="form-control" id="money"  aria-describedby="addon-wrapping">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="createWallet()">Save</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
              </div>     
            </div>
          </div>
        <div class="content-detached content-left">
          <div class="content-body"><div id="wallet">
    <div class="wallet-table-th d-none d-md-block">
        <div class="row">
            <div class="col-md-3 col-12 py-1">
                <p class="mt-0 text-capitalize">Name Wallet</p>
            </div>
            <div class="col-md-2 col-12 py-1 text-center">
                <p class="mt-0 text-capitalize">Số Tiền Thu</p>
            </div>
            <div class="col-md-2 col-12 py-1 text-center">
                <p class="mt-0 text-capitalize">Số Tiền Chi</p>
            </div>
            <div class="col-md-2 col-12 py-1 text-center">
                <p class="mt-0 text-capitalize">Đã Chi Tiêu</p>
            </div>
            <div class="col-md-3 col-12 py-1 text-center" >
                <p class="mt-0 text-capitalize"></p>
            </div>
        </div>
    </div>
    <div id="1"> </div>
        </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
    `)
          showListWallet()
      } else {
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
          <li class=" nav-item"><a onclick="showUsers()"><i class="icon-user-following"></i>Users</a>
          <li class=" nav-item"><a onclick="showFormProfile()"><i class="ft-user"></i> Profile</span></a>
          <li class=" nav-item"> <a onclick="logOut()"><i class="ft-power"></i> Log Out</a></li>  
        </ul>
      </div>
    </div>
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-1 col-12 mb-2 breadcrumb-new">
            <h3 class="content-header-title mb-0 d-inline-block">Wallet</h3>
          </div>
          <div class="content-header-right col-md-11 col-12">
            <div class="btn-group float-md-left">           
              <div class="btn-group float-md-left">
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createModal">ADD WALLET</button>
                            <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD WALLET</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="input-group flex-nowrap">
                                            <span class="input-group-text" id="addon-wrapping">Name</span>
                                            <input type="text" class="form-control" id="nameWallet"  aria-describedby="addon-wrapping">
                                        </div>
                                        <br>
                                        <div class="input-group flex-nowrap">
                                            <span class="input-group-text" id="addon-wrapping">MONEY VND</span>
                                            <input type="text" class="form-control" id="money"  aria-describedby="addon-wrapping">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="createWallet()">Save</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
              </div>     
            </div>
          </div>
        <div class="content-detached content-left">
          <div class="content-body"><div id="wallet">
    <div class="wallet-table-th d-none d-md-block">
        <div class="row">
            <div class="col-md-3 col-12 py-1">
                <p class="mt-0 text-capitalize">Name Wallet</p>
            </div>
            <div class="col-md-2 col-12 py-1 text-center">
                <p class="mt-0 text-capitalize">Số Tiền Thu</p>
            </div>
            <div class="col-md-2 col-12 py-1 text-center">
                <p class="mt-0 text-capitalize">Số Tiền Chi</p>
            </div>
            <div class="col-md-2 col-12 py-1 text-center">
                <p class="mt-0 text-capitalize">Đã Chi Tiêu</p>
            </div>
            <div class="col-md-3 col-12 py-1 text-center" >
                <p class="mt-0 text-capitalize"></p>
            </div>
        </div>
    </div>
    <div id="1"> </div>
        </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
    `)
          showListWallet()
      }
    } else {
        showLogin()
    }
}
function showListWallet() {
    let users = JSON.parse(localStorage.getItem('token'))
    console.log(users)
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/wallet/${users.idUser}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        success : (wallet) => {
            let html = ''
            wallet.map(item => {
                html += `
       <section class="card">
        <div class="card-content">
            <div class="card-body">
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-3 col-12 py-1">
                            <div class="media">
                                <div class="media-body" onclick="showTransaction(${item.idWallet})">
                                  <h5 class="mt-0 text-capitalize">${item.nameWallet}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <h6 style="color: green">${item.incomeMoney} VND</h6>         
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                           <h6 style="color: red">${item.payMoney} VND</h6>  
                        </div>
                         <div class="col-md-2 col-12 py-1 text-center">
                           <h6> VND</h6>  
                        </div>
                        <tr>
                        <td>
                        <div class="col-md-3 col-12 text-center">
                         <button class="btn btn-danger text-left" data-bs-toggle="modal" data-bs-target="#deleteModal${item.idWallet}">Delete</button>
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
                        <td>
                         <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#editModal${item.idWallet}">Edit</button>
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
                        </tr>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
       `
            })
            $("#1").html(html)
        }
    })
}
function editWallet(id) {
    let users = JSON.parse(localStorage.getItem('token'))
    let nameWallet = $(`#nameWallet${id}`).val()
    let money = $(`#money${id}`).val()
    let user = users.idUser
    let wallet = {
        nameWallet: nameWallet,
        incomeMoney: money,
        user: user
    }
    $.ajax({
        type: 'PUT',
        url: `http://localhost:3000/wallet/edit/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        data: JSON.stringify(wallet),
        success : () => {
            showWallet()
        }
    })
}
function createWallet() {
    let users = JSON.parse(localStorage.getItem('token'))
    let nameWallet = $("#nameWallet").val()
    let incomeMoney = $("#money").val()
    let idUser = users.idUser;
    let wallet = {
        nameWallet: nameWallet,
        incomeMoney: incomeMoney,
        user: idUser
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/wallet/create",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        data: JSON.stringify(wallet),
        success : () => {
            showWallet()
        }
    })
}
function deleteWallet(id) {
    let users = JSON.parse(localStorage.getItem('token'))
    $.ajax({
        type: 'DELETE',
        url: `http://localhost:3000/wallet/delete/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        success : () => {
            showWallet()
        }
    })
}