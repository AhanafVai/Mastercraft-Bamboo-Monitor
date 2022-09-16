// Array
const pledgeInfos = [
  {
    id: "1",
    title: "Pledge with no reward",
    subtitle: " ",

    description:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    value: "0",
  },
  {
    id: "2",
    title: "Bamboo Stand",
    subtitle: "Pledge $25 or more",
    description:
      " You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    value: "25",
  },
  {
    id: "3",
    title: "Black Edition Stand",
    subtitle: "Pledge $75 or more",
    description:
      " You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    value: "75",
  },
  {
    id: "4",
    title: "Mahogany Special Edition",
    subtitle: "Pledge $200 or more",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    value: "200",
  },
];

// getting elements
const hamburger = document.querySelector("#hamburger");
const off = document.querySelector("#off");
const menu = document.querySelector("#menu");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const thanksCard = document.querySelector("#thanksCard");
const modalContainer = document.querySelector("#modalContainer");

// event listeners

// functions & functionality
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  off.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  overlay.classList.add("overlay");
});
off.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  off.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
});

const openModal = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
};
const openThanksCard = () => {
  modal.classList.toggle("hidden");
  thanksCard.classList.toggle("hidden");
};

const overlayOff = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
};

const closeThanks = () => {
  thanksCard.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
};

// Modal
pledgeInfos.forEach((pledgeInfo, i) => {
  const modalDiv = document.createElement("div");

  modalDiv.innerHTML = `
 <section
 
      class="bg-white rounded-lg border border-gray-200 mx-6 shadow-sm p-5 my-5 md:mx-10 md:px-10"
          >
            <div class="px-2 flex items-center  space-x-2">
              <input
                onclick="getElementById('${pledgeInfo.id}').classList.toggle('hidden')"
                name="modalOption"
                type="radio"
                class='inputs'
              />
            <div class="md:flex md:justify-between md:items-center">
                <h2 class="md:text-2xl"><strong>${pledgeInfo.title}</strong></h2>
                <h3 class="text-sm text-moderateCyan font-medium md:text-lg">
                 ${pledgeInfo.subtitle}
                </h3>
              </div>
            </div>
            <p class="py-5 px-2 text-darkGray text-sm md:text-lg">
          ${pledgeInfo.description}
            </p>
            <div id="${pledgeInfo.id}" class="hidden">
              <hr />
              <p class="text-center text-darkGray pt-10">Enter your pledge</p>
              <div class="py-5 flex justify-between items-center">
                <input
                  type="text"
                  class="rounded-full w-2/5 py-3 px-6 border border-gray-400"
                  placeholder="$"
                  value ="$ ${pledgeInfo.value}"
               / >
                <button
                 onclick="openThanksCard()"
                  class="bg-moderateCyan text-white py-3 px-6 rounded-full active:bg-darkCyan focus:bg-darkCyan"
                >
                  continue
                </button>
              </div>
            </div>
          </section>
 `;
  modalContainer.appendChild(modalDiv);
});
