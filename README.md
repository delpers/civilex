# Civil+ (Internet Protection)

> The extension checks websites before opening them for you, improve your user experience!

> L'extension vérifie les sites web avant de les ouvrir pour vous, améliorez votre expérience utilisateur !

## Cloud API

```bash
https://www.npoint.io/
```

## Usage getBlockedWebsite

> The first method is to ban a specific website and web address.

> La première méthode consiste à interdire un site web spécifique et une adresse web.

```
[
  {
    "id": 1,
    "currently": "http://www.example.fr/",
    "pushing": "https://asnsi.io/r/index"
  },
  {
    "id": 2,
    "currently": "http://www.example.com/",
    "pushing": "https://asnsi.io/r/index"
  }
]
```

## Usage getAllowedWebsite

> The second method authorizes a specific domain, in a relationship with host names and unauthorized slugs. In this case, the unauthorized slugs are allowed on the approving domain.

> La deuxième méthode autorise un domaine spécifique, dans le cadre d'une relation avec des noms d’hôtes et des limaces non autorisées. Dans ce cas de figure, les limaces non autorisées sont autorisées sur le domaine d’approbation.

```
[
  {
    "id": 1,
    "allowed": "website.com"
  },
  {
    "id": 2,
    "allowed": "website.fr"
  }
]
```

## Usage getBlockedHostname

> The third method restricts hostnames that include a specific term from the endpoint keyword list on all domain extension types (.fr, .com...), except for an approval of the second method.

> La troisième méthode restreint les noms d’hôtes qui comprennent un terme spécifique de la liste des mots-clés du point de terminaison sur tous les types d’extension de domaine (.fr, .com...), sauf une approbation de la deuxième méthode.

```
[
  {
    "id": 1,
    "read": "porn",
    "recommended": "https://asnsi.io/r/adultes"
  },
  {
    "id": 2,
    "read": "bitcoin",
    "recommended": "https://asnsi.io/r/cryptomonnaie"
  },
  {
    "id": 3,
    "read": "website",
    "recommended": "https://asnsi.io/r/dg"
  }
]
```

## Usage getBlockedSlugs

> The fourth method restricts slugs by keywords on all addresses, except approval of the second method.

> La quatrième méthode restreint les limaces par des mots-clés sur toutes les adresses, sauf approbation de la deuxième méthode.

```
[
  {
    "id": 1,
    "rslug": "slug",
    "URL": "https://asnsi.io/r/index"
  },
  {
    "id": 2,
    "rslug": "retard",
    "URL": "https://asnsi.io/r/index"
  }
]
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)