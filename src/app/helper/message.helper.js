class MessageHelper {
    noticeMessage(content) {
        alert(content);
    }
    warnMessage(content) {
        alert(content);
    }
    errorMessage(content) {
        alert(content);
    }
}
export default MessageHelper;
export const messageHelper = new MessageHelper();
