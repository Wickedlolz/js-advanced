function requestValidator(object) {
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const uriRegex = /(^[\w.]+$)/;
    const messageRegex = /([<>\\&'"]+)/;

    if (
        object.method == undefined ||
        validMethods.includes(object.method) == false
    ) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (
        object.uri == undefined ||
        object.uri == "" ||
        uriRegex.test(object.uri) == false
    ) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (
        object.version == undefined ||
        validVersions.includes(object.version) == false
    ) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (object.message == undefined || messageRegex.test(object.message)) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return object;
}
