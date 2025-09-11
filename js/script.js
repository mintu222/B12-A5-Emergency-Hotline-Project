function addHeart() {
  const heartOutput = document.getElementById("heart-output");
  const value = heartOutput.innerText;
  heartOutput.innerText = parseInt(value) + 1;
}

function addCopy() {
  const heartOutput = document.getElementById("add-copy");
  const value = heartOutput.innerText;
  heartOutput.innerText = parseInt(value) + 1;
}

function addCall(id) {
  const coin = document.getElementById("coin-id");
  const getCoin = parseInt(coin.innerText);
  const nameId = document.getElementById(`name-${id}`);
  const name = nameId.innerText;

  const addCallCart = document.getElementById("call-list");

  if (getCoin >= 20) {
    alert("add call list")
    const addCard = document.createElement("div");
    addCard.innerHTML = `
    <div
          class="bg-[#fafafa] rounded-lg p-4 flex justify-between items-center gap-4"
        >
          <div>
            <h1 class="font-inter text-lg font-semibold">
              ${name}
            </h1>
            <p class="font-hind-madurai text-[#5c5c5c] text-lg font-normal">
              999
            </p>
          </div>
          <span class="font-hind-madurai text-[#111111] text-lg font-normal"
            >${new Date().toLocaleTimeString()}</span
          >
        </div>
   `;
    addCallCart.append(addCard);
    document.getElementById("coin-id").innerText = getCoin - 20;
  } else {
    alert(" no call");
  }

  
}

function clearList() {
  const clearList = document.getElementById("call-list");
  clearList.innerHTML = "";
}
