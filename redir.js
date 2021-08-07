var urlmain = document.URL;
var md = document.URL.split("/")[3];
var id = document.URL.split("/")[4];

if (md == 'deep') {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key=_AKX4n0&dl_target_url=https://www.aliexpress.com/item/'+id;
} else {
  var redir = '//';
}

window.location = redir;
