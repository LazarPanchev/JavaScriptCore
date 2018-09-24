let messagesService  = (() => {
        function loadMyMessages(username) {
            let endpoint = `messages?query={"recipient_username":"${username}"}`;

            return requester.get('appdata', endpoint, 'kinvey');
        } //9

        function loadArchiveMessages(username) {
            let endpoint = `messages?query={"sender_username":"${username}"}`;

            return requester.get('appdata', endpoint, 'kinvey');
        } //15

        function deleteMessage(messageId) {
            let endpoint = `messages/${messageId}`;

            return requester.remove('appdata', endpoint, 'kinvey');
        } //16

        function loadAllUsers() {
            return requester.get('user', '', 'kinvey');
        }

        function sendMessage(sender_username, sender_name, recipient_username, text) {
            let msgData = {
                sender_username,
                sender_name,
                recipient_username,
                text
            };

            return requester.post('appdata', 'messages', 'kinvey', msgData);
        }

        return {
            loadMyMessages,
            loadArchiveMessages,
            deleteMessage,
            loadAllUsers,
            sendMessage
        }
})();