const linksSocialMedia = {
  github: "EltonJCS",
  youtube: " ",
  facebook: " ",
  instagram: " ",
  twitter: " ",
};

function changeSociaMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;

    if (linksSocialMedia[social] == "") {
      li.children[0].style.display = "none";
    }
  }
}

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.login;
      userBio.textContent = data.bio;
      userGithubLink.href = data.html_url;
      userGithubName.textContent = data.login;
      userProfileImage.src = data.avatar_url;

      pageTitle.textContent = "Badge | " + data.login;
    });
}

changeSociaMediaLinks();
getGithubProfileInfo();
