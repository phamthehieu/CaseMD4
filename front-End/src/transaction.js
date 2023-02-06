function showTransaction(id) {
   $("#body").html(`
    <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-light navbar-bg-color">
      <div class="navbar-wrapper">
        <div class="navbar-header d-md-none">
          <ul class="nav navbar-nav flex-row">
            <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu font-large-1"></i></a></li>
            <li class="nav-item d-md-none"><button onclick="showWallet()"><img class="brand-logo d-none d-md-block" alt="CryptoDash admin logo" src="../../../app-assets/images/logo/logo.png"><img class="brand-logo d-sm-block d-md-none" alt="CryptoDash admin logo sm" src="../../../app-assets/images/logo/logo-sm.png"></button></li>
            <li class="nav-item d-md-none"><a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="la la-ellipsis-v"></i></a></li>
          </ul>
        </div>
        <div class="navbar-container">
          <div class="collapse navbar-collapse" id="navbar-mobile">
            <ul class="nav navbar-nav mr-auto float-left">
              <li class="nav-item d-none d-md-block"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu"></i></a></li>
              <li>
                <div class="input-group mb-3" style="margin-top: 10px">
                  <span class="input-group-text" id="basic-addon1"><i class="ficon ft-search"></i></span>
                  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onkeyup="searchTransaction(this.value, ${id})">
                </div>
              </li>
            </ul>
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
                                      <div class="col-md-12 col-12">  
                                       <h6 class="my-1">ADD TRANSACTION</h6>
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
                                    <div class="form-horizontal form-purchase-token row">          
                                      <div class="col-md-2 col-12">
                                           <div class="row g-3 align-items-center">
                                               <div class="col-auto">
                                                 <label for="inputPassword6" class="col-form-label">Type</label>
                                               </div>
                                              <div class="col-8">
                                               <select class="custom-select" id="type">
                                                <option value="income">income</option>
                                                <option value="pay">pay</option>                                         
                                               </select>
                                              </div>
                                            </div>  
                                        </div> 
                                        <div class="col-md-2 col-12">
                                         <div class="row g-3 align-items-center">
                                               <div class="col-2">
                                                 <label for="inputPassword6" class="col-form-label">List</label>
                                               </div>
                                              <div class="col-6">
                                               <select class="custom-select" id="category">
                                                <option selected></option>                                               
                                               </select>
                                              </div>
                                              <div class="col-3">
                                                 <button class="btn btn-white" data-bs-toggle="modal" data-bs-target="#editModal"><i class="la la la-plus-circle black font-medium-6"></i></button>
                                                      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                           <div class="modal-dialog modal-lg">
                                                                 <div class="modal-content">
                                                                      <div class="modal-header">
                                                                           <h1 class="modal-title fs-5" id="exampleModalLabel">Create Category</h1>
                                                                           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                      </div>
                                                                      <div class="modal-body">
                                                                          <div class="input-group flex-nowrap">
                                                                              <span class="input-group-text" id="addon-wrapping">Name</span>
                                                                              <input type="text" class="form-control" id="nameCategory" aria-label="Username" aria-describedby="addon-wrapping">
                                                                          </div>
                                                                             
                                                                            </div>
                                                                            <div class="modal-footer">
                                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="addCategory(${id})">Save</button>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                               </div>
                                                            </div>                                 
                                        </div>                                                                                            
                                         <div class="col-md-4 col-12 mb-1">
                                           <div class="row g-3 align-items-center">
                                               <div class="col-auto">
                                                 <label class="col-form-label">Money</label>
                                               </div>
                                              <div class="col-auto">
                                                <input type="text" id="money" class="form-control" aria-describedby="passwordHelpInline">
                                              </div>
                                              <div class="col-auto">
                                                <span id="passwordHelpInline" class="form-text">
                                                  Thêm Tiền Cho Danh Mục
                                                </span>
                                              </div>
                                            </div>
                                        </div>
                                      
                                        <div class="col-md-2 col-12 text-center">
                                            <button type="submit" class="btn-gradient-secondary" onclick="createTransaction(${id})">ADD</button>
                                        </div>
                                    </div>
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
                                            <th class="border-top-0">NGÀY THÊM</th>
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
                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="input-group mb-3">
                                          <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" id="date" placeholder="  vvNhập ngày muốn tìm kiếm ?">
                                          <select class="form-select" aria-label="Default select example" aria-describedby="addon-wrapping" onchange="searchDay(this.value, ${id})">
                                          <option value="1">Tháng 1</option>
                                          <option value="2">Tháng 2</option>
                                          <option value="3">Tháng 3</option>
                                          <option value="4">Tháng 4</option>
                                          <option value="5">Tháng 5</option>
                                          <option value="6">Tháng 6</option>
                                          <option value="7">Tháng 7</option>
                                          <option value="8">Tháng 8</option>
                                          <option value="9">Tháng 9</option>
                                          <option value="10">Tháng 10</option>
                                          <option value="11">Tháng 11</option>
                                          <option value="12">Tháng 12</option>
                                       </select>
                                        </div>
                                    </div>
                                </div>
                            </div>           
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-12">
                        <h6 class="my-2">SEARCH TO MONTH</h6>
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="card-text">
                                      <select class="form-select" aria-label="Default select example" aria-describedby="addon-wrapping" onchange="searchMonth(this.value, ${id})">
                                         <option value="1">Tháng 1</option>
                                         <option value="2">Tháng 2</option>
                                         <option value="3">Tháng 3</option>
                                         <option value="4">Tháng 4</option>
                                         <option value="5">Tháng 5</option>
                                         <option value="6">Tháng 6</option>
                                         <option value="7">Tháng 7</option>
                                         <option value="8">Tháng 8</option>
                                         <option value="9">Tháng 9</option>
                                         <option value="10">Tháng 10</option>
                                         <option value="11">Tháng 11</option>
                                         <option value="12">Tháng 12</option>
                                      </select>
                                      <tbody id="month">
                                      </tbody>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="table-responsive">
                                            <table id="recent-orders" class="table table-hover table-xl mb-0">
                                            <thead>
                                            <tr>
                                                <th class="border-top-0">Status</th>                               
                                                <th class="border-top-0">DANH MỤC</th>
                                                <th class="border-top-0">SỐ TIỀN</th>
                                                <th class="border-top-0">NGÀY THÊM</th>
                                            </tr>
                                            </thead>
                                            <tbody id="month">
                                            </tbody>
                                            </table>
                                        </div> 
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
        url: `http://localhost:3000/transactions/getAll/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        success : (all) => {
            let html = ''
            let categories = ''
            all.category.map(item => {
                categories += `
                         <option value="${item.idCategory}">${item.nameCategory}</option>                  
                `})
            all.transaction.map(item => {
                html += `
                <tr>
                   <td class="text-truncate"><i class="la la-cart-plus success font-medium-1 mr-1"></i> ${item.type}</td>
                    <td class="text-truncate">
                        <p>${item.nameCategory}</p>
                            </td>
                              <td class="text-truncate">
                                 <p>${item.money} <i class="la la-dollar success font-medium-1 mr-1"></i></p>
                              </td>
                               <td class="text-truncate">
                                 <p>Ngày: ${item.date} - Tháng: ${item.month}</p>
                              </td>
                              <td>
                                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal${item.idTransaction}">Edit</button>
                                      <div class="modal fade" id="editModal${item.idTransaction}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                           <div class="modal-dialog modal-lg">
                                                         <div class="modal-content">
                                                              <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit ${item.nameCategory}</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="input-group flex-nowrap">
                                                                <span class="input-group-text" id="addon-wrapping">Money</span>
                                                                <input type="text" class="form-control" id="money${item.idTransaction}" value="${item.money}"  aria-describedby="addon-wrapping">
                                                            </div>
                                                            <br>
                                                            <div class="input-group flex-nowrap">
                                                                <select id="category${item.idTransaction}" class="form-select" aria-label="Default select example" aria-describedby="addon-wrapping">
                                                                    <option value="${item.idCategory}">${item.nameCategory}</option>
                                                                    ${categories}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="editTransaction(${item.idTransaction})">Save</button>
                                                        </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </td>
                                            <td>
                                             <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal${item.idTransaction}">Delete</button>
                                                <div class="modal fade" id="deleteModal${item.idTransaction}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Delete ${item.type} - ${item.nameCategory}</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Are you sure you want to delete???
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="deleteTransaction(${item.idTransaction}, ${item.wallet})">Yes</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </td>             
                                        </tr>
                           
                `})
            showListCategory(id)
            $("#listTransactions").html(html)

        }
    })

}
function addCategory(id) {
    let users = JSON.parse(localStorage.getItem('token'))
    let nameCategory = $("#nameCategory").val()
    let category = {
        nameCategory: nameCategory,
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/categories/create",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        data: JSON.stringify(category),
        success : () => {
            showTransaction(id)
        }
    })
}
function createTransaction(id) {
    let users = JSON.parse(localStorage.getItem('token'))
    let category = $("#category").val();
    let type = $("#type").val();
    let wallet = id;
    let money = $("#money").val();
    let transaction = {
        category: category,
        type: type,
        wallet: wallet,
        money: money
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/transactions",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        data: JSON.stringify(transaction),
        success : () => {
            showTransaction(id)
        }
    })
}
function showListCategory(id) {
    let users = JSON.parse(localStorage.getItem('token'))
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/transactions/getAll/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        success : (all) => {
            let html1 = ''
            all.category.map(item => {
                html1 += `
                         <option value="${item.idCategory}">${item.nameCategory}</option>                  
                `})
            $('#category').html(html1)
        }
    })
}
function editTransaction(idTransaction) {
    let users = JSON.parse(localStorage.getItem('token'))
    $.ajax({
        type: "GET",
        url: `http://localhost:3000/transactions/findById/${idTransaction}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        success : (transaction) => {
            let wallet = transaction.wallet;
            let category = $(`#category${idTransaction}`).val()
            let type = transaction.type;
            let money = $(`#money${idTransaction}`).val();
            let editTransaction = {
                wallet: wallet,
                category: category,
                type: type,
                money: money
            }
            $.ajax({
                type: "PUT",
                url: `http://localhost:3000/transactions/${idTransaction}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + users.token
                },
                data: JSON.stringify(editTransaction),
                success : () => {
                    showTransaction(wallet)
                }
            })
        }
    })
}
function deleteTransaction(idTransaction, idWallet) {
    let users = JSON.parse(localStorage.getItem('token'))
    $.ajax({
        type: 'DELETE',
        url: `http://localhost:3000/transactions/${idTransaction}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        success : () => {
            showTransaction(idWallet)
        }
    })
}
function searchTransaction(value, id) {
    let type = value.toLowerCase()
    let users = JSON.parse(localStorage.getItem('token'))
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/transactions/search?type=${type}&wallet=${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        data: JSON.stringify(type, id),
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
                                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal${item.idTransaction}">Edit</button>
                                      <div class="modal fade" id="editModal${item.idTransaction}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                           <div class="modal-dialog modal-lg">
                                                 <div class="modal-content">
                                                      <div class="modal-header">
                                                           <h1 class="modal-title fs-5" >Edit ${item.nameCategory}</h1>
                                                           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                      </div>
                                                      <div class="modal-body">
                                                          <div class="input-group flex-nowrap">
                                                              <span class="input-group-text" >Money</span>
                                                              <input type="text" class="form-control" id="money${item.idTransaction}" value="${item.money}" aria-describedby="addon-wrapping"> 
                                                              
                                                          </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="editTransaction(${item.wallet}, ${item.idTransaction}})">Save</button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </td>
                                            <td>
                                             <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal${item.idTransaction}">Delete</button>
                                                <div class="modal fade" id="deleteModal${item.idTransaction}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Delete ${item.type} - ${item.nameCategory}</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Are you sure you want to delete???
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="deleteTransaction(${item.idTransaction}, ${item.wallet})">Yes</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </td>             
                                        </tr>
                            
                `})
            showListCategory(id)
            $("#listTransactions").html(html)

        }
    })
}
function searchMonth(month, id) {
    let users = JSON.parse(localStorage.getItem('token'))
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/transactions/month/search?id=${id}&month=${month}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users.token
        },
        data: JSON.stringify(id,month),
        success : (transactions) => {
            console.log(transactions)
            let html =''
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
                    <td class="text-truncate">
                        <p>Ngày: ${item.date} - Tháng: ${item.month}</p>
                    </td>   
              </tr>
               `})
            $("#month").html(html)
        }
    })
}
function searchDay(month, id) {
    let date = $("#date").val()
    console.log(month)
    console.log(id)
    console.log(date)

}
