var crmBuild = new Date().toString().replace(/\s+/g, "");
var _ufCommandExecute = _uf.commands.Command.prototype.execute;
_uf.commands.Command.prototype.execute = function () {
  if (this.cmd == "JS") {
    var dataSrc = this.data;
    if (
      Array.prototype.slice
        .call(document.getElementsByTagName("script"))
        .filter(function (a) {
          return (
            a.type == "text/javascript" &&
            ((a.attributes.src || {}).value == dataSrc || a.src == dataSrc)
          );
        }).length == 0
    ) {
      this.data = dataSrc + "?r=" + crmBuild;
    }
  }
  _ufCommandExecute.call(this);
};
