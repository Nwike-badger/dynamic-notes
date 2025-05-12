
// const notesContainer = document.getElementById('notes-container');
// const addNoteButton = document.getElementById('add-note');

// const masonry = new Masonry(notesContainer, {
//     itemSelector: '.col',
//     percentPosition: true,
//     gutter: 16
// });

// function createNoteCard() {
//     const removeHome = document.getElementById("home");

//     const col = document.createElement('div');
//     col.className = 'col';
//     col.innerHTML = `
//         <div class="card note-card" id="demo-card">
//             <div>
//                 <textarea
//                     class="form-control notetitle-design note-content bg-transparent"
//                     placeholder="Title"></textarea>
//             </div>
//             <div>
//                 <div
//                     class="form-control notecontent-design note-content bg-transparent"
//                     contenteditable="true"
//                     placeholder="Note"
//                     style="min-height: 100px;"></div>
//             </div>
//             <div class="card-footer-actions px-4">
//                 <button class="btn btn-sm btn-light p-1" id="bg-btn">
//                     <img src="./images/download.png" alt="BG" class="icon-img">
//                 </button>
//                 <button class="btn btn-sm btn-light p-1" id="img-btn">
//                     <img src="./images/images.png" alt="Image" class="icon-img">
//                 </button>
//                 <button class="btn btn-sm btn-light position-relative p-1" id="options-btn">⋮</button>
//             </div>

//             <div class="bg-color-menu" id="bg-color-menu">
//                 <div class="color-swatch bg-light" data-color="#f8f9fa"></div>
//                 <div class="color-swatch bg-warning" data-color="#ffc107"></div>
//                 <div class="color-swatch bg-info" data-color="#0dcaf0"></div>
//                 <div class="color-swatch bg-success" data-color="#198754"></div>
//                 <div class="color-swatch bg-danger" data-color="#dc3545"></div>
//             </div>

//             <div class="options-menu" id="options-menu">
//                 <button id="delete-btn">Delete</button>
//                 <button id="copy-btn">Make a Copy</button>
//             </div>
              
//             <input type="file" id="img-upload" accept="image/*" style="display: none;">
//         </div>
//     `;

//     const card = col.querySelector(".note-card");
//     const optionsBtn = col.querySelector("#options-btn");
//     const optionsMenu = col.querySelector("#options-menu");
//     const bgBtn = col.querySelector("#bg-btn");
//     const bgMenu = col.querySelector("#bg-color-menu");
//     const imgBtn = col.querySelector("#img-btn");
//     const imgInput = col.querySelector("#img-upload");
//     const noteContent = col.querySelector(".note-content");

//     // Toggle options menu
//     optionsBtn.addEventListener("click", function (e) {
//         e.stopPropagation();
//         optionsMenu.classList.toggle("show");
//         bgMenu.classList.remove("show");
//         card.classList.add("show-actions");
//     });

//     // Toggle background color menu
//     bgBtn.addEventListener("click", function (e) {
//         e.stopPropagation();
//         bgMenu.classList.toggle("show");
//         optionsMenu.classList.remove("show");
//         card.classList.add("show-actions");
//     });

//     // Background color change
//     bgMenu.addEventListener("click", function (e) {
//         if (e.target.classList.contains("color-swatch")) {
//             const color = e.target.dataset.color;
//             card.style.backgroundImage = "";
//             card.style.backgroundColor = color;
//             bgMenu.classList.remove("show");
//         }
//     });

//     // Upload and insert image inside contenteditable div
//     imgBtn.addEventListener("click", () => {
//         imgInput.click();
//     });

//     imgInput.addEventListener("change", function () {
//         const file = this.files[0];
//         if (!file) return;

//         const reader = new FileReader();
//         reader.onload = function (e) {
//             const img = document.createElement("img");
//             img.src = e.target.result;
//             img.style.maxWidth = "100%";
//             img.style.borderRadius = "8px";
//             img.style.margin = "8px 0";

//             // Insert image at current cursor position
//             const selection = window.getSelection();
//             if (selection.rangeCount > 0) {
//                 const range = selection.getRangeAt(0);
//                 range.deleteContents();
//                 range.insertNode(img);

//                 // Move cursor after image
//                 range.setStartAfter(img);
//                 range.setEndAfter(img);
//                 selection.removeAllRanges();
//                 selection.addRange(range);

//                 masonry.layout();
//             }
//         };
//         reader.readAsDataURL(file);
//     });

//     // Hide menus on outside click
//     document.addEventListener("click", function (e) {
//         if (!card.contains(e.target)) {
//             optionsMenu.classList.remove("show");
//             bgMenu.classList.remove("show");
//             card.classList.remove("show-actions");
//         }
//     });

//     // Remove "home" default message
//     removeHome.classList.add("d-none");

//     notesContainer.appendChild(col);

//     // Watch for input changes to adjust layout
//     noteContent.addEventListener('input', () => {
//         masonry.layout();
//     });

//     masonry.appended(col);
//     masonry.layout();
// }

// addNoteButton.addEventListener('click', createNoteCard);





// const notesContainer = document.getElementById('notes-container');
// const addNoteButton = document.getElementById('add-note');

// const masonry = new Masonry(notesContainer, {
//     itemSelector: '.col',
//     percentPosition: true,
//     gutter: 16
// });

// function createNoteCard() {
//     const removeHome = document.getElementById("home");

//     const col = document.createElement('div');
//     col.className = 'col';
//     col.innerHTML = `
//     <div class="card note-card" id="demo-card">
//         <div>
//           <textarea
//             class="form-control notetitle-design note-content bg-transparent"
//             placeholder="Title"></textarea>
//         </div>
//         <div>
//           <textarea
//             class="form-control notecontent-design note-content bg-transparent"
//             placeholder="Note"></textarea>
//         </div>
//         <div class="card-footer-actions px-4">
//           <button class="btn btn-sm btn-light p-1" id="bg-btn">
//             <img src="./images/download.png" alt="BG" class="icon-img">
//           </button>
//           <button class="btn btn-sm btn-light p-1" id="img-btn">
//             <img src="./images/images.png" alt="Image" class="icon-img">
//           </button>
//           <button class="btn btn-sm btn-light position-relative p-1" id="options-btn">⋮</button>
//         </div>

//         <div class="bg-color-menu" id="bg-color-menu">
//           <div class="color-swatch bg-light" data-color="#f8f9fa"></div>
//           <div class="color-swatch bg-warning" data-color="#ffc107"></div>
//           <div class="color-swatch bg-info" data-color="#0dcaf0"></div>
//           <div class="color-swatch bg-success" data-color="#198754"></div>
//           <div class="color-swatch bg-danger" data-color="#dc3545"></div>
//         </div>

//         <div class="options-menu" id="options-menu">
//           <button id="delete-btn">Delete</button>
//           <button id="copy-btn">Make a Copy</button>
//         </div>

//         <input type="file" id="img-upload" accept="image/*" style="display: none;">

//         <div class="image-container mt-2 px-3"></div>
//     </div>
//     `;

//     const card = col.querySelector(".note-card");
//     const optionsBtn = col.querySelector("#options-btn");
//     const optionsMenu = col.querySelector("#options-menu");
//     const bgBtn = col.querySelector("#bg-btn");
//     const bgMenu = col.querySelector("#bg-color-menu");
//     const imgBtn = col.querySelector("#img-btn");
//     const imgInput = col.querySelector("#img-upload");
//     const imageContainer = col.querySelector(".image-container");

    
//     optionsBtn.addEventListener("click", function (e) {
//         e.stopPropagation();
//         optionsMenu.classList.toggle("show");
//         bgMenu.classList.remove("show");
//         card.classList.add("show-actions");
//     });

    
//     bgBtn.addEventListener("click", function (e) {
//         e.stopPropagation();
//         bgMenu.classList.toggle("show");
//         optionsMenu.classList.remove("show");
//         card.classList.add("show-actions");
//     });

    
//     bgMenu.addEventListener("click", function (e) {
//         if (e.target.classList.contains("color-swatch")) {
//             const color = e.target.dataset.color;
//             card.style.backgroundImage = "";
//             card.style.backgroundColor = color;
//             bgMenu.classList.remove("show");
//         }
//     });

    
//     imgBtn.addEventListener("click", () => {
//         imgInput.click();
//     });

//     imgInput.addEventListener("change", function () {
//         const file = this.files[0];
//         if (!file) return;

//         const reader = new FileReader();
//         reader.onload = function (e) {
//             const img = document.createElement("img");
//             img.src = e.target.result;
//             img.style.width = "100%";
//             img.style.marginTop = "0.5rem";
//             img.style.borderRadius = "8px";
//             imageContainer.appendChild(img);
//         };
//         reader.readAsDataURL(file);
//     });

    
//     document.addEventListener("click", function (e) {
//         if (!card.contains(e.target)) {
//             optionsMenu.classList.remove("show");
//             bgMenu.classList.remove("show");
//             card.classList.remove("show-actions");
//         }
//     });
    


//    const deleteBtn = col.querySelector("#delete-btn");

//     deleteBtn.addEventListener("click", function () {
//         masonry.remove(col); 
//         masonry.layout();    
//     });



//     removeHome.classList.add("d-none");
//     notesContainer.appendChild(col);

//     col.querySelectorAll('.note-content').forEach(textarea => {
//         textarea.addEventListener('input', function () {
//             this.style.height = 'auto';
//             this.style.height = this.scrollHeight + 'px';
//             masonry.layout();
//         });
//     });

//     masonry.appended(col);
//     masonry.layout();
// }

// addNoteButton.addEventListener('click', createNoteCard);



const notesContainer = document.getElementById('notes-container');
const addNoteButton = document.getElementById('add-note');

const masonry = new Masonry(notesContainer, {
    itemSelector: '.col',
    percentPosition: true,
    gutter: 16
});

function setupCardFunctionality(col) {
    const card = col.querySelector(".note-card");
    const optionsBtn = col.querySelector("#options-btn");
    const optionsMenu = col.querySelector("#options-menu");
    const bgBtn = col.querySelector("#bg-btn");
    const bgMenu = col.querySelector("#bg-color-menu");
    const imgBtn = col.querySelector("#img-btn");
    const imgInput = col.querySelector("#img-upload");
    const imageContainer = col.querySelector(".image-container");
    const deleteBtn = col.querySelector("#delete-btn");
    const copyBtn = col.querySelector("#copy-btn");

    optionsBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        optionsMenu.classList.toggle("show");
        bgMenu.classList.remove("show");
        card.classList.add("show-actions");
    });

    bgBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        bgMenu.classList.toggle("show");
        optionsMenu.classList.remove("show");
        card.classList.add("show-actions");
    });

    bgMenu.addEventListener("click", function (e) {
        if (e.target.classList.contains("color-swatch")) {
            const color = e.target.dataset.color;
            card.style.backgroundImage = "";
            card.style.backgroundColor = color;
            bgMenu.classList.remove("show");
        }
    });

    imgBtn.addEventListener("click", () => {
        imgInput.click();
    });

    imgInput.addEventListener("change", function () {
        const file = this.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = "100%";
            img.style.marginTop = "0.5rem";
            img.style.borderRadius = "8px";
            imageContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    });

    document.addEventListener("click", function (e) {
        if (!card.contains(e.target)) {
            optionsMenu.classList.remove("show");
            bgMenu.classList.remove("show");
            card.classList.remove("show-actions");
        }
    });

    deleteBtn.addEventListener("click", function () {
        masonry.remove(col);
        masonry.layout();
    });

    copyBtn.addEventListener("click", function () {
        const newCol = col.cloneNode(true);
        setupCardFunctionality(newCol);
        notesContainer.appendChild(newCol);
        masonry.appended(newCol);
        masonry.layout();
    });

    col.querySelectorAll('.note-content').forEach(textarea => {
        textarea.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
            masonry.layout();
        });
    });
}

function createNoteCard() {
    const removeHome = document.getElementById("home");

    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
    <div class="card note-card" id="demo-card">
        <div>
          <textarea
            class="form-control notetitle-design note-content bg-transparent"
            placeholder="Title"></textarea>
        </div>
        <div>
          <textarea
            class="form-control notecontent-design note-content bg-transparent"
            placeholder="Note"></textarea>
        </div>
        <div class="card-footer-actions px-4">
          <button class="btn btn-sm btn-light p-1" id="bg-btn">
            <img src="./images/download.png" alt="BG" class="icon-img">
          </button>
          <button class="btn btn-sm btn-light p-1" id="img-btn">
            <img src="./images/images.png" alt="Image" class="icon-img">
          </button>
          <button class="btn btn-sm btn-light position-relative p-1" id="options-btn">⋮</button>
        </div>

        <div class="bg-color-menu" id="bg-color-menu">
          <div class="color-swatch bg-light" data-color="#f8f9fa"></div>
          <div class="color-swatch bg-warning" data-color="#ffc107"></div>
          <div class="color-swatch bg-info" data-color="#0dcaf0"></div>
          <div class="color-swatch bg-success" data-color="#198754"></div>
          <div class="color-swatch bg-danger" data-color="#dc3545"></div>
        </div>

        <div class="options-menu" id="options-menu">
          <button id="delete-btn">Delete</button>
          <button id="copy-btn">Make a Copy</button>
        </div>

        <input type="file" id="img-upload" accept="image/*" style="display: none;">
        <div class="image-container mt-2 px-3"></div>
    </div>
    `;

    setupCardFunctionality(col);

    removeHome.classList.add("d-none");
    notesContainer.appendChild(col);
    masonry.appended(col);
    masonry.layout();
}

addNoteButton.addEventListener('click', createNoteCard);



