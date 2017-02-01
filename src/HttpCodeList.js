// https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP



module.exports.HttpCodeList:  {

    // requête traitée avec succès.
    HTTP_CODE_200_OK: 200,

    // requête traitée avec succès et création d’un document.
    HTTP_CODE_201_CREATED: 201,

    // requête traitée, mais sans garantie de résultat.
    HTTP_CODE_202_ACCEPTED: 202,

    // information retournée, mais générée par une source non certifiée.
    HTTP_CODE_203_NON_AUTHORITATIVE_INFORMATION: 203,

    // requête traitée avec succès mais pas d’information à renvoyer.
    HTTP_CODE_204_NO_CONTENT: 204,

    // requête traitée avec succès, la page courante peut être effacée.
    HTTP_CODE_205_RESET_CONTENT: 205,

    // une partie seulement de la ressource a été transmise.
    HTTP_CODE_206_PARTIAL_CONTENT: 206,

    // rFC 32293 : Le serveur a accompli la requête pour la ressource, et la réponse est une représentation du résultat d'une ou plusieurs manipulations d'instances appliquées à l'instance actuelle.
    HTTP_CODE_226_IM_USED: 226,

    // l’URI demandée se rapporte à plusieurs ressources.
    HTTP_CODE_300_MULTIPLE_CHOICES: 300,

    // document déplacé de façon permanente.
    HTTP_CODE_301_MOVED_PERMANENTLY: 301,

    // document déplacé de façon temporaire.
    HTTP_CODE_302_MOVED_TEMPORARILY: 302,

    // la réponse à cette requête est ailleurs.
    HTTP_CODE_303_SEE_OTHER: 303,

    // document non modifié depuis la dernière requête.
    HTTP_CODE_304_NOT_MODIFIED: 304,

    // la requête doit être ré-adressée au proxy.
    HTTP_CODE_305_USE_PROXY: 305,

    // la requête doit être redirigée temporairement vers l’URI spécifiée.
    HTTP_CODE_307_TEMPORARY_REDIRECT: 307,

    // la requête doit être redirigée définitivement vers l’URI spécifiée.
    HTTP_CODE_308_PERMANENT_REDIRECT: 308,

    // la requête doit être redirigée de trop nombreuses fois, ou est victime d’une boucle de redirection.
    HTTP_CODE_310_TOO_MANY_REDIRECTS: 310,

    // la syntaxe de la requête est erronée.
    HTTP_CODE_400_BAD_REQUEST: 400,

    // une authentification est nécessaire pour accéder à la ressource.
    HTTP_CODE_401_UNAUTHORIZED: 401,

    // paiement requis pour accéder à la ressource.
    HTTP_CODE_402_PAYMENT_REQUIRED: 402,

    // le serveur a compris la requête, mais refuse de l'exécuter. Contrairement à l'erreur 401, s'authentifier ne fera aucune différence. Sur les serveurs où l'authentification est requise, cela signifie généralement que l'authentification a été acceptée mais que les droits d'accès ne permettent pas au client d'accéder à la ressource.
    HTTP_CODE_403_FORBIDDEN: 403,

    // ressource non trouvée.
    HTTP_CODE_404_NOT_FOUND: 404,

    // méthode de requête non autorisée.
    HTTP_CODE_405_METHOD_NOT_ALLOWED: 405,

    // la ressource demandée n'est pas disponible dans un format qui respecterait les en-têtes "Accept" de la requête.
    HTTP_CODE_406_NOT_ACCEPTABLE: 406,

    // accès à la ressource autorisé par identification avec le proxy.
    HTTP_CODE_407_PROXY_AUTHENTICATION_REQUIRED: 407,

    // temps d’attente d’une requête du client écoulé.
    HTTP_CODE_408_REQUEST_TIME_OUT: 408,

    // la requête ne peut être traitée en l’état actuel.
    HTTP_CODE_409_CONFLICT: 409,

    // la ressource n'est plus disponible et aucune adresse de redirection n’est connue.
    HTTP_CODE_410_GONE: 410,

    // la longueur de la requête n’a pas été précisée.
    HTTP_CODE_411_LENGTH_REQUIRED: 411,

    // préconditions envoyées par la requête non vérifiées.
    HTTP_CODE_412_PRECONDITION_FAILED: 412,

    // traitement abandonné dû à une requête trop importante.
    HTTP_CODE_413_REQUEST_ENTITY_TOO_LARGE: 413,

    // uri trop longue.
    HTTP_CODE_414_REQUEST_URI_TOO_LONG: 414,

    // format de requête non supporté pour une méthode et une ressource données.
    HTTP_CODE_415_UNSUPPORTED_MEDIA_TYPE: 415,

    // champs d’en-tête de requête « range » incorrect.
    HTTP_CODE_416_REQUESTED_RANGE_UNSATISFIABLE: 416,

    // comportement attendu et défini dans l’en-tête de la requête insatisfaisable.
    HTTP_CODE_417_EXPECTATION_FAILED: 417,

    // la requête a été envoyée à un serveur qui n'est pas capable de produire une réponse (par exemple, car une connexion a été réutilisée).
    HTTP_CODE_421_BAD_MAPPING_OR_MISDIRECTED_REQUEST: 421,

    // rFC 28177 Le client devrait changer de protocole, par exemple au profit de TLS/1.0.
    HTTP_CODE_426_UPGRADE_REQUIRED: 426,

    // rFC 65858 La requête doit être conditionnelle.
    HTTP_CODE_428_PRECONDITION_REQUIRED: 428,

    // rFC 65859 Le client a émis trop de requêtes dans un délai donné.
    HTTP_CODE_429_TOO_MANY_REQUESTS: 429,

    // rFC 658510 Les entêtes HTTP émises dépassent la taille maximale admise par le serveur.
    HTTP_CODE_431_REQUEST_HEADER_FIELDS_TOO_LARGE: 431,

    // ce code d'erreur indique que la ressource demandée est inaccessible pour des raisons d'ordre légal11,12.
    HTTP_CODE_451_UNAVAILABLE_FOR_LEGAL_REASONS: 451,

    // indique que le serveur n'a retourné aucune information vers le client et a fermé la connexion.
    HTTP_CODE_444_NO_RESPONSE: 444,

    // une extension de l'erreur 400 Bad Request, utilisée lorsque le client a fourni un certificat invalide.
    HTTP_CODE_495_SSL_CERTIFICATE_ERROR: 495,

    // une extension de l'erreur 400 Bad Request, utilisée lorsqu'un certificat client requis n'est pas fourni.
    HTTP_CODE_496_SSL_CERTIFICATE_REQUIRED: 496,

    // une extension de l'erreur 400 Bad Request, utilisée lorsque le client envoie une requête HTTP vers le port 443 normalement destiné aux requêtes HTTPS.
    HTTP_CODE_497_HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497,

    // le client a fermé la connexion avant de recevoir la réponse. Cette erreur se produit quand le traitement est trop long côté serveur13
    HTTP_CODE_499_CLIENT_CLOSED_REQUEST: 499,

    // erreur interne du serveur.
    HTTP_CODE_500_INTERNAL_SERVER_ERROR: 500,

    // fonctionnalité réclamée non supportée par le serveur.
    HTTP_CODE_501_NOT_IMPLEMENTED: 501,

    // mauvaise réponse envoyée à un serveur intermédiaire par un autre serveur.
    HTTP_CODE_502_BAD_GATEWAY_OR_PROXY_ERROR: 502,

    // service temporairement indisponible ou en maintenance.
    HTTP_CODE_503_SERVICE_UNAVAILABLE: 503,

    // temps d’attente d’une réponse d’un serveur à un serveur intermédiaire écoulé.
    HTTP_CODE_504_GATEWAY_TIME_OUT: 504,

    // version HTTP non gérée par le serveur.
    HTTP_CODE_505_HTTP_VERSION_NOT_SUPPORTED: 505,

    // rFC 229514 : Erreur de négociation. Transparent content negociation.
    HTTP_CODE_506_VARIANT_ALSO_NEGOTIATES: 506,

    // utilisé par de nombreux serveurs pour indiquer un dépassement de quota.
    HTTP_CODE_509_BANDWIDTH_LIMIT_EXCEEDED: 509,

    // rFC 277416 : la requête ne respecte pas la politique d'accès aux ressources HTTP étendues.
    HTTP_CODE_510_NOT_EXTENDED: 510,

    // rFC 658517 : Le client doit s'authentifier pour accéder au réseau. Utilisé par les portails captifs pour rediriger les clients vers la page d'authentification.
    HTTP_CODE_511_NETWORK_AUTHENTICATION_REQUIRED: 511,
}
