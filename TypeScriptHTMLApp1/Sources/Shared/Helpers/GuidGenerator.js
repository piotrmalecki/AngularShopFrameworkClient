var Guid;
(function (Guid) {
    var GuidGenerator = (function () {
        function GuidGenerator() {
        }
        GuidGenerator.newGuid = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        return GuidGenerator;
    }());
    Guid.GuidGenerator = GuidGenerator;
})(Guid || (Guid = {}));
//# sourceMappingURL=GuidGenerator.js.map