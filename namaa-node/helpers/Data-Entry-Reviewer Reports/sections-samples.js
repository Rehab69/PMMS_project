module.exports=(data)=>{
   const today = new Date();
   return `
   <!doctype html>
   <html>

   <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <style>
         /* .invoice-box {
   
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
            } */
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
       font-size: small;
       font-weight: 700;
   }
   td.tdHead{
      border: 1px solid #ffffff
   }
      </style>
   </head>
   
   <body>
   
      <div class="invoice-box">
         <div style="display: flex; flex-direction: row; justify-content: space-around; padding-top: 2vh;">
            <div>
               <img
                  src="https://www.namaaconsult.com/img/logo.png"
                  style="width:100%; max-width:156px;" /> </div>
            <div>
               <h1>Report of Section Samples (Major Roads)</h1>
            </div>
            <div style="display: flex; flex-direction: column;">
               <span>Report No. 1</span>
               <span>Date:   ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</span>
            </div>
         </div>
         <div class="invoice-box">
            <table cellpadding="0" cellspacing="0">
               <thead>
                  <tr class="information" style="text-align: center;   background-color: #dddddd;">
                     <td class="tdHead">
                     Sample Id
                     </td>
                     <td class="tdHead">
                     Section Id
                     </td>
                     <td class="tdHead">
                     Survey_No
                     </td>
                     <td class="tdHead">
                     Collected_Date
                     </td>
                     <td class="tdHead">
                     Survey_Responsible
                     </td>
                     <td class="tdHead">
                     Comment
                     </td>
                     <td class="tdHead">
                     Entry_Date
                     </td>
                     <td class="tdHead">
                     Data_Entry
                     </td>
                     <td class="tdHead">
                     Alligator crack
                     </td>
                     <td class="tdHead">
                     Severity
                     </td>
                     <td class="tdHead">
                     Area in M2
                     </td>

                     <td class="tdHead">
                     Bleeding
                     </td>
                     <td class="tdHead">
                     Severity
                     </td>
                     <td class="tdHead">
                     Area in M2
                     </td>

                     <td class="tdHead">
                     Blocking_cracks
                     </td>
                     <td class="tdHead">
                     Severity
                     </td>
                     <td class="tdHead">
                     Area in M2
                     </td>

                     <td class="tdHead">
                     Edge crack
                     </td>
                     <td class="tdHead">
                     Severity
                     </td>
                     <td class="tdHead">
                     Area in M2
                     </td>

                     <td class="tdHead">
                     Rutting
                     </td>
                     <td class="tdHead">
                     Severity
                     </td>
                     <td class="tdHead">
                     Area in M2
                     </td>

                     <td class="tdHead">
                     Long_Trans
                     </td>
                     <td class="tdHead">
                     Severity
                     </td>
                     <td class="tdHead">
                     Area in M2
                     </td>

                  </tr>
               </thead>
               <tbody>
               ${data.map((d)=>
              ` <tr>
               <td>${d.Id}</td>
               <td>${d.Section_ID}</td>
               <td>${d.Survey_No}</td>
               <td>${d.Collected_Date}</td>
               <td>${d.Survey_Responsible}</td>
               <td>${d.Comment?d.Comment:"No Comments"}</td>
               <td>${d.Entry_Date}</td>
               <td>${d.Data_Entry_Responsible}</td>

               <td>${d.Alligator_crack?"exist":"not exist"}</td>
              <td>${d.Alligator_crack_severity?d.Alligator_crack_severity:"----"}</td>
              <td>${d.Alligator_crack_area?d.Alligator_crack_area:"----"}</td>

              <td>${d.Bleeding?"exist":"not exist"}</td>
              <td>${d.Bleeding_severity?d.Bleeding_severity:"----"}</td>
              <td>${d.Bleeding_area?d.Bleeding_area:"----"}</td>

              <td>${d.Blocking_cracks?"exist":"not exist"}</td>
              <td>${d.Blocking_cracks_severity?d.Blocking_cracks_severity:"-----"}</td>
              <td>${d.Blocking_cracks_area?d.Blocking_cracks_area:"----"}</td>

              <td>${d.Edge_cracking?"exist":"not exist"}</td>
              <td>${d.Edge_cracking_severity?d.Edge_cracking_severity:"----"}</td>
              <td>${d.Edge_cracking_area?d.Edge_cracking_area:"-----"}</td>

              <td>${d.Rutting?"exist":"not exist"}</td>
              <td>${d.Rutting_severity?d.Rutting_severity:"-----"}</td>
              <td>${d.Rutting_area?d.Rutting_area:"----"}</td>

              <td>${d.Long_Trans?"exist":"not exist"}</td>
              <td>${d.Long_Trans_severity?d.Long_Trans_severity:"-----"}</td>
              <td>${d.Long_Trans_area?d.Long_Trans_area:"-----"}</td>

             </tr>`
)}
               </tbody>
            </table>
        
            <br />
         </div>
      </div>
   
      <div style='color:#1a5276; font-size:12px; margin-left:10vh; margin-right:10vh'>
         <span style='float:left;'>Report of Section Samples (Major Roads)</span>
        
         </span>
      </div>
   
   
   </body>
   
   </html>
   `
}

