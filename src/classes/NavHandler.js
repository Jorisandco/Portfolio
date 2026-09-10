export class NavHandler {
  constructor () {
    this.CurrentLink = window.location.href
    this.protocol = window.location.protocol
    this.Linkorigin = window.location.origin
    this.PageObjectID = null

    console.log(window.location)
  }

  switchPage (page) {
    let params = new URLSearchParams(document.location.search)

    params.set('page', page)
    window.history.pushState({}, '', `?${params.toString()}`)
  }

  GetCurrentPoint () {
    this.CheckifCurrentPointIsSet()

    let params = new URLSearchParams(document.location.search)

    return params.get("page")
  }

  GetObjectID () {}

  CheckifCurrentPointIsSet () {
    // Instead of manually splitting, use URLSearchParams consistently
    const nopageParam =
      new URLSearchParams(window.location.search).get('page') === null
    if (nopageParam === true) this.switchPage('aboutme')
  }
}
