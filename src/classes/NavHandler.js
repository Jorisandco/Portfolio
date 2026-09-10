export class NavHandler {
  constructor () {
    this.CurrentLink = window.location.href;
    this.protocol = window.location.protocol;
    this.Linkorigin = window.location.origin;

    console.log(window.location);
  }

  switchPage (page, PageObjectID = null) {
    let params = new URLSearchParams(document.location.search);
    params.set('page', page);

    if (PageObjectID !== null) params.set('ObjectID', PageObjectID);

    window.history.pushState({}, '', `?${params.toString()}`);
  }

  GetCurrentPoint () {
    this.CheckifCurrentPointIsSet();

    const params = new URLSearchParams(document.location.search);

    return params.get('page');
  }

  GetObjectID () {
    const params = new URLSearchParams(document.location.search);

    return params.get('ObjectID');
  }

  CheckifCurrentPointIsSet () {
    const nopageParam =
      new URLSearchParams(window.location.search).get('page') === null

    if (nopageParam === true) this.switchPage('aboutme')
  }
}
