function megaMenu() {
    closeBox()
    var megaMenu = document.getElementById("megamenu");
    if (megaMenu.style.display === "none") {
        megaMenu.style.display = "block";
    } else {
        megaMenu.style.display = "none";
    }
  }
  function openSettings() {
    closeBox()
    var settings = document.getElementById("settings");
    if (settings.style.display === "none") {
        settings.style.display = "block";
    } else {
        settings.style.display = "none";
    }
  }
  function openBook() {
    closeBox()
    var bookmark = document.getElementById("bookmark");
    if (bookmark.style.display === "none") {
        bookmark.style.display = "block";
    } else {
        bookmark.style.display = "none";
    }
  }
  function openGames() {
    closeBox()
    var games = document.getElementById("games");
    if (games.style.display === "none") {
        games.style.display = "block";
    } else {
        games.style.display = "none";
    }
  }
  function openDiscord() {
    closeBox()
    toggleModal()
    var discord = document.getElementById("discord");
    if (discord.style.display === "none") {
        discord.style.display = "block";
    } else {
        discord.style.display = "none";
    }
  }
  function openLinks() {
    closeBox()
    var links = document.getElementById("links");
    if (links.style.display === "none") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }
  }

  function openApps() {
    closeBox()
    var apps = document.getElementById("apps");
    if (apps.style.display === "none") {
        apps.style.display = "block";
    } else {
        apps.style.display = "none";
    }
  }

  function game2() {
    localStorage.setItem('reload', 'yes');
    location.reload()
  }

  window.onload = function() {
    var button = document.getElementById("btn");
    if (localStorage.getItem("reload") === 'yes') {
      openGames()
      button.click()
      localStorage.clear()
      document.getElementById("preloader").innerHTML = "";
    } else {
      // Nothing
    }
  };

  function game3() {
    document.body.innerHTML = "<iframe src='./games.html' style='display: block;background: #2e2e2e;border: none; height: 100vh;width: 100vw;'></iframe>";
  }

  function storeOpen() {
    window.location.href = "https://www.patreon.com/rblockers";
  }

  function closeBox() {
    var need0 = document.getElementById("megamenu");
    var need1 = document.getElementById("settings");
    var need2 = document.getElementById("bookmark");
    var need3 = document.getElementById("games");
    var need4 = document.getElementById("discord");
    var need5 = document.getElementById("links");
    var need6 = document.getElementById("apps");
    need0.style.display = "none";
    need1.style.display = "none";
    need2.style.display = "none";
    need3.style.display = "none";
    need4.style.display = "none";
    need5.style.display = "none";
    need6.style.display = "none";
  }

  function applyGame() {
    window.location = "./apply.html";
  }


const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
		$('.image-upload-wrap').addClass('image-dropping');
	});
	$('.image-upload-wrap').bind('dragleave', function () {
		$('.image-upload-wrap').removeClass('image-dropping');
});

function aboutBlank() {
  var textChange = document.getElementById("cloak-button");
  localStorage.setItem('about-blank', 1);
}

function back() {
  location.replace("/");
}