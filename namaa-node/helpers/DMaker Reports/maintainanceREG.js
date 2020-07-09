module.exports = (data) => {
   const today = new Date();
   return `
    <!doctype html>
    <html>

    <head>
       <meta charset="utf-8">
       <title>PDF Result Template</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">

       <style>
          .invoice-box {
    
             margin: 6vh;
             display: table;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
    
          }
    
          .margin-top {
             margin-top: 50px;
          }
    
          .justify-center {
             text-align: center;
          }
    
          .invoice-box table {
             width: 100%;
    
    
          }
    
    
          .invoice-box table tr.top table td {
             padding-bottom: 20px;
          }
    
          .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
          }
    
          .invoice-box table tr.information table td {
             padding-bottom: 40px;
          }
    
          .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
          }
    
          .invoice-box table tr.details td {
             padding-bottom: 20px;
          }
    
          .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
          }
    
          .invoice-box table tr.item.last td {
             border-bottom: none;
          }
    
          .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
          }
    
          @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
             }
    
             .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
             }
    
             
          }
          td.tdHead {
                border-width: 5px;
                border-color: white;
                border: outset;
             } 
             .invoice-box {
    
    margin: 6vh;
    display: table;
    border: 1px solid #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    font-size: 16px;
    line-height: 24px;
    
    }
    
    .margin-top {
    margin-top: 50px;
    }
    
    .justify-center {
    text-align: center;
    }
    
    .invoice-box table {
    width: 100%;
    
    
    }
    
    
    .invoice-box table tr.top table td {
    padding-bottom: 20px;
    }
             table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    
    
    td{
       text-align: center;
        vertical-align: middle;
    }
    tr{
       text-align: center;
        font-size: 12px;
        font-weight: 700;
    }
    td.tdHead{
       border: 1px solid #ffffff
    }
    .header{
      display: flex;
       flex-direction: row;
        justify-content: space-around;
         padding-top: 2vh;
    }
    .headh3{
      border-bottom: solid;
    }
       </style>
    </head>
    
    <body>
    
       <div class="invoice-box">
          <div style="display:inline">
             <div style="display:inline;">
                <img
                   src="https://www.namaaconsult.com/img/logo.png"
                   style=" max-width:156px;" /> 
                <h3  style="display:inline; text-align: center; margin-left:30vw; ">Maintenance Report of Regions</h3>
              <p>
                <p  style="display:inline; ">Report No. 1</p>
               <p>Date:  ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</p></p>
               </div>
            
          </div>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <thead>
                   <tr class="information" style="text-align: center;  fonst-size:12px; background-color: #dddddd;">
                      <td class="tdHead">
                      Region ID
                      </td>
                      <td class="tdHead">
                      Region Name
                      </td>
                      <td class="tdHead">
                      City Name
                      </td>
                      <td class="tdHead">
                      No. of Streets
                      </td>
                      <td class="tdHead">
                      Area in m2
                      </td>
                      <td class="tdHead">
                      Major Type of Cracks in Region
                      </td>
                      <td class="tdHead">
                         GI Value
                      </td>
                      <td class="tdHead">
                      Pavement Condition
                      </td>
                      <td class="tdHead">
                         Road Construction Year
                      </td>
                      <td class="tdHead">
                         Life Achieved of Road
                      </td>
                      <td class="tdHead">
                         Asset Age
                      </td>
                   </tr>
                </thead>
                <tbody>
                ${data.map(Regions => (
                  `<tr className="hoverOnRow" >
                      <td>${Regions.regionId}</td>
                      <td>${Regions.RegionName}</td>
                      <td>${Regions.city}</td>
                      <td>${Regions.noStreets}</td>
                      <td>${Regions.area} M2</td>
                      <td>${Regions.MajorTypeOfCracks}</td>
                      <td style={{ fontSize: 'medium', fontWeight: 'bolder'}}>
                          <small  style={{position:'static'}} className=


                              ${Regions.udi > 0 && Regions.udi < 30 ? "text-danger mr-1" :
                                  Regions.udi >= 30 && Regions.udi < 50 ? "text-warning mr-1" :
                                      Regions.udi >= 50 && Regions.udi < 70 ? "text-secondary mr-1" :
                                          Regions.udi >= 70 && Regions.udi < 85 ? "text-primary mr-1" :
                                              Regions.udi >=85? "text-success mr-1":null}



                          >
                              <i className=${

                                  Regions.udi > 50 ? "fas fa-arrow-up" : "fas fa-arrow-down"
                              } style={{ margin: "5px" }} />

                          </small>
                          ${Regions.udi}
                      </td>
                      <td>${Regions.pavmentcondition}</td>
                      <td>${Regions.constructionYr}</td>
                      <td>${Regions.lifeAchieved} Yr</td>
                      <td>${Regions.assetAge} Yr</td>
                      </tr>
                      `
              ))}
             </tbody>
             </table>
         
             <br />
          </div>
       </div>
    
       <div style='color:#1a5276; font-size:12px; margin-left:10vh; margin-right:10vh'>
       <span style='float:left;'>Maintenance Report of Regions</span>
      
       </span>
    </div>
    </body>
    
    </html>
    
    `
}

