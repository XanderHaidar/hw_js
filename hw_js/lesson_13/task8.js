`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  function userAndNews() {
    let userResponse = confirm(`Do you want to read the news?`)

    if (userResponse) {
      window.location.href = `https://www.ukr.net`
    } else {
      alert(`In 20 seconds, you will be redirected to the ukr.net website.`)
      setTimeout(function () {
        window.location.href = `https://www.ukr.net`
      }, 20000)
    }
  }

  userAndNews()

  //=======================================================================================================================================================
}