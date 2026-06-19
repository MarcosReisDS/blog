export const isRelativePathRegex =
    /^\/(?:[A-Za-z0-9._~!$&'()*+,;=@%-]|%[0-9A-Fa-f]{2})*(?:\/(?:[A-Za-z0-9._~!$&'()*+,;=:@%-]|%[0-9A-Fa-f]{2})*)*$/;

export const isUrlOrRelativePath = (val: string) => {
    try {
        new URL(val)
        return true;
    } catch (error) {
        return isRelativePathRegex.test(val)
    }
}