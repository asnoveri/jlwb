const Mulai = document.querySelector("#Mulai");
Mulai.addEventListener("click", () => {
  PlayMusic();
  const myModal = new bootstrap.Modal(document.querySelector("#myModal"));
  myModal.show();
  const isi = modal1("mdl1");
  tampilModaal(isi);
});

function PlayMusic() {
  const music = document.querySelector("#music");
  music.play();
}
function PuseMusic() {
  const music = document.querySelector("#music");
  music.pause();
}

document.addEventListener("click", function (e) {
  console.log(e.target.id);
  if (e.target.id == "tmblOK1") {
    const isi = modal1("tmblOK1");
    tampilModaal(isi);
  } else if (e.target.id == "tmblsayang") {
    const isi = modal1(e.target.id);
    tampilModaal(isi);
  } else if (e.target.id == "next") {
    const customRange1 = document.querySelector("#customRange1").value;
    const isi = modal1(e.target.id, customRange1);
    tampilModaal(isi);
  } else if (e.target.id == "next1") {
    const isi = modal1(e.target.id);
    tampilModaal(isi);
  } else if (e.target.id == "tmblkagen") {
    const isi = modal1(e.target.id);
    tampilModaal(isi);
  } else if (e.target.id == "next2") {
    const isi = modal1(e.target.id);
    tampilModaal(isi);
  } else if (e.target.id == "gendut") {
    const isi = modal1(e.target.id);
    tampilModaal(isi);
  } else if (e.target.id == "ngkgendut") {
    const isi = modal1(e.target.id);
    tampilModaal(isi);
  } else if (e.target.id == "gendut1" || e.target.id == "kurus") {
    const isi = modal1(e.target.id);
    tampilModaal(isi);
  } else if (e.target.id == "ayok" || e.target.id == "ngkah") {
    const isi = modal1(e.target.id);
    tampilModaal(isi);
  } else if (e.target.id == "tmblngksayang" || e.target.id == "tmblngkkangen") {
    const isi = modal1(e.target.id);
    tampilModaal(isi);
  } else if (e.target.id == "end") {
    PuseMusic();
  }
});

function tampilModaal(isi) {
  const getModal = document.querySelector(".modal-body");
  getModal.innerHTML = isi;
}

function modal1(param, data = null) {
  if (param == "mdl1") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <h4 class="text-center fontSty"  >Hallo Pacar Ku</h4>
              <p class="fontSty text-center">aku ada pertanyaan nih buat kamu</p>
              <p class="fontSty text-center">jawab dengan jujur yaaa....</p>
              <div class="d-grid gap-2  tbl">
                <button type="button" class="btn btn-dark" id="tmblOK1">OK</button>
              </div>`;
  } else if (param == "tmblOK1") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <p class="fontSty text-center">Kamu Sayang Aku Ngak??</p>
              <div class="d-grid gap-2  tbl1">
                <button type="button" class="btn btn-dark" id="tmblsayang">Sayang</button>
                <button type="button" class="btn btn-dark" id="tmblngksayang">Ngak Sayang</button>
              </div>`;
  } else if (param == "tmblsayang") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <p class="fontSty text-center">Aku Juga Sayang Kamu..  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-emoji-heart-eyes"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"
              />
            </svg></p>   
              <p class="fontSty text-center">Berapa Persen Sayang Kamu ke aku??</p>
              <div class="d-grid gap-2  tbl1">
                <input type="range" class="form-range" id="customRange1">
                <button type="button" class="btn btn-dark" id="next">OK</button>
              </div>`;
  } else if (param == "next") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <p class="fontSty text-center">Makasih Ya Udah Sayang Sama Aku ${data}%   <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-emoji-heart-eyes"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"
              />
            </svg></p>
              <div class="d-grid gap-2  tbl1">
                <button type="button" class="btn btn-dark" id="next1">OK</button>
              </div>`;
  } else if (param == "next1") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <p class="fontSty text-center">Sekarang Kamu Kangen Aku Ngkk??</p>
              <div class="d-grid gap-2  tbl1">
                <button type="button" class="btn btn-dark" id="tmblkagen">Kangen</button>
                <button type="button" class="btn btn-dark" id="tmblngkkangen">Ngak</button>
              </div>`;
  } else if (param == "tmblkagen") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <p class="fontSty text-center">HiHi Aku Kangen Juga Sama Kamu walaupun tiap malam VCan dan hampir tiap hari ketemuaan, Maksih yakkk.. </p>
              <div class="d-grid gap-2  tbl1">
                <button type="button" class="btn btn-dark" id="next2">OK</button>
              </div>`;
  } else if (param == "next2") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <p class="fontSty text-center">Ehh Sayang Satu pertanyaan lagi yakk</p>
              <p class="fontSty text-center">Aku Gendutan Ngak sih??</p>
              <div class="d-grid gap-2  tbl1">
                <button type="button" class="btn btn-dark" id="gendut">Gendut</button>
                <button type="button" class="btn btn-dark" id="ngkgendut">Ngak</button>
              </div>`;
  } else if (param == "gendut") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <p class="fontSty text-center">Kamu Lebih Suka Aku Gendutan atau Kurusan???</p>
              <div class="d-grid gap-2  tbl1">
                <button type="button" class="btn btn-dark" id="gendut1">Gendut</button>
                <button type="button" class="btn btn-dark" id="kurus">Kurus</button>
              </div>`;
  } else if (param == "gendut1" || param == "kurus" || param == "ngkgendut") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <p class="fontSty text-center">Sayang Satu  Lagi yakk heheh, serius ini pertanyaan yang paling terakhir wkwk</p>
              <p class="fontSty text-center">Sayang couplean Boxker / Sempak yookk</p>
              <div class="d-grid gap-2  tbl1">
                <button type="button" class="btn btn-dark" id="ayok">Ayook</button>
                <button type="button" class="btn btn-dark" id="ngkah">iih ngak suka gelay</button>
              </div>`;
  } else if (param == "ayok" || param == "ngkah") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <p class="fontSty text-center">Aku Sayang Kamu <br> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-emoji-heart-eyes"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"
              />
            </svg> </p>
            <div class="text-center">
          </div>
          <div class="card">
              <img src="jl.jpg" class="rounded gbrjl" alt="jlku" >
              <div class="card-body">
                <p class="card-text prag"><marquee>Julia Monica,,, Terimakasih ya untuk semuanya,, aku saya dan cinta kamu julia monica,, jangan bosan bosan ya sama akuu..,,,  </marquee></p>
                </div>
            </div>
              <div class="d-grid gap-2  tbl1">
                <button type="button" class="btn btn-dark" id="end" data-bs-dismiss="modal">OK</button>
              </div>`;
  } else if (param == "tmblngksayang" || param == "tmblngkkangen") {
    return `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div class="card">
                <img src="ad.svg" class="rounded gbrjl" alt="jlku" >
                <div class="card-body">
                  <p class="card-text prag"><marquee>Ceritanya GUa Lagi Sedih Gitu kwkwk </marquee></p>
                  </div>
              </div>
             `;
  }
}
