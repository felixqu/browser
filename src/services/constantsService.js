function ConstantsService() {
    return {
        disableGaKey: 'disableGa',
        disableAddLoginNotificationKey: 'disableAddLoginNotification',
        disableContextMenuItemKey: 'disableContextMenuItem',
        lockOptionKey: 'lockOption',
        lastActiveKey: 'lastActive',
        encType: {
            AesCbc256_B64: 0,
            AesCbc128_HmacSha256_B64: 1,
            AesCbc256_HmacSha256_B64: 2,
            Rsa2048_OaepSha256_B64: 3,
            Rsa2048_OaepSha1_B64: 4
        }
    };
};
