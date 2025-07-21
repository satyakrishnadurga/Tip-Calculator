
        let BillAmount =document.getElementById("BillAmount");
        let PercentageTip =document.getElementById("PercentageTip");
        let errorMessage = document.getElementById("errorMessage");
        let TipAmountInput = document.getElementById("TipAmount");
        let TotalAmountInput = document.getElementById("TotalAmount");
        let button=document.getElementById('button');
        button.onclick=()=>{
          TipAmountInput.value= parseInt(BillAmount.value)*(parseInt(PercentageTip.value)/100);
          TotalAmountInput.value= parseInt(BillAmount.value)+ parseInt(TipAmountInput.value);

        }