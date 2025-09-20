'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f53906674edcf39ffb86f97e01ffebf4",
"version.json": "0c47fef56e20a75a3a2a630a78efd4de",
"splash/img/light-2x.png": "f27d9e15d08033406e569241163a07d0",
"splash/img/dark-4x.png": "87876fb4bad4cb50d23487fbe87c50ff",
"splash/img/light-3x.png": "664b96fae8751bb43c299502aa281c1b",
"splash/img/dark-3x.png": "664b96fae8751bb43c299502aa281c1b",
"splash/img/light-4x.png": "87876fb4bad4cb50d23487fbe87c50ff",
"splash/img/dark-2x.png": "f27d9e15d08033406e569241163a07d0",
"splash/img/dark-1x.png": "65422695c386ac693a2e4e5cd7f37c42",
"splash/img/light-1x.png": "65422695c386ac693a2e4e5cd7f37c42",
"index.html": "548759a6e46f181e0976c9cb71f20edd",
"/": "548759a6e46f181e0976c9cb71f20edd",
"vercel.json": "139a9a7977999d75c36a2517fa103324",
"firebase-messaging-sw.js": "789c6db27de6fdac512c0bdab1a51fb4",
"main.dart.js": "757d7f5a56297f29335cf489e0021045",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5e2326762bda895ccc2da5f3f746980a",
".git/config": "6fb49dfc560e3dd936905476df01e13b",
".git/objects/61/39c247c4e5e6c0cae37bf88bdbae7fad5ae3bf": "4c8db23331f28c4c62b1667797474d12",
".git/objects/0d/a4a68c0af18432dae4cf534ecbb17748784292": "82c9859a6725bf543b384fa90df48ed7",
".git/objects/59/c4f149791e2d9532df797d9435378f8da3bea0": "7fce5ad4c81beabd6b10791513ff497a",
".git/objects/92/ce16307ec19aeff70ed74da7fed5afbedd5569": "15191dd8eebe6ebbc504481f50ef8949",
".git/objects/66/5b075e585df69ecfc9d6e550de88bbe4a5d258": "126d8ac590eed305f0543872df9e2940",
".git/objects/68/bdd5942bf551423434c3317695f598a834adeb": "62a8a520e49dcc40d97a4c423326ae8a",
".git/objects/3b/49454bf1f3e12e1f249e5fa82380aee0690209": "a9fa9ffacfcb6f3a2108a856f16acfca",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/4bd345b402fca43d68757096730b0eb881652c": "ddda71ae6da0cea67aba2be49e6d6c07",
".git/objects/32/acb416ec355d98d2aa815df59ef43e6161fb6c": "840426ca454b230f80b5ee6dd9106e55",
".git/objects/32/ae9289e20db8d466c6ce75f2a9f58497fe10ad": "018a1a45a4e625f950776598e98180bb",
".git/objects/35/c4d2ad8355473c5ed2f0369bc96ba5f082b9fd": "58f393e5da1ea24234e073d81b001e14",
".git/objects/69/274d150a692bbb1382faabd7234b90d50452b8": "babefba5079d88836d6503a91a571cd0",
".git/objects/69/890b116674d33ebf8e05ddc1e8e83ce9f9d648": "d6e22b3a84e473c4d707495767e6dec6",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/7b1bb31fd1e231fe4a9a979d3bca9437f19b4a": "972f9ca3282f5d4b386e89d1e89e7741",
".git/objects/56/f5e7315bfa55cd78a5e677fcda7e67929ba33b": "45abfae45d6c45342764e41936d4458e",
".git/objects/0b/b607d09d112911adec079f4333ad83fd42560b": "df2423cc38c91f09424604ae7131c558",
".git/objects/94/4fc0c06985441ba76d7c71225d1e4f4f19222a": "db0a4b6bf0e04802bb7f472d85cfbb50",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/5f/9ca9660789dab03bbb4c385600ae2f38a4ae95": "234007528bf7792f239ef22a769a086a",
".git/objects/05/702a6021b3a29fb6a5009dc7816acbced5db1b": "6707565dda53369fc08d641368dd63cb",
".git/objects/9d/3a12b2934c1e5fa683c17bdd193921e0645c34": "9a93025a79a990475bd32631cd525fed",
".git/objects/9d/4f40b788883f0f9bcd806ec82fb3ef7f2c7c00": "379d17a1bc989cf5cf29fea1ad625a9c",
".git/objects/9c/d715ec2fc7e9655b765d281aaca4846c841494": "273979f8b998ae2bb3571afdefe98710",
".git/objects/ac/7dc357439b4e9e3d9df2d478b6ee210f5a92e2": "ab3dda55a1de3c40bf1a9c8d9fcdcefc",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/be/d9933330b5f0b39d5cb508b1fc544ecefb494b": "2ba0705f7027bdc6219064a0358b6500",
".git/objects/df/a8ce6d70bc29a153c965e66a2295a2432be536": "b03725f755d6d441f4539b3fd0c63a10",
".git/objects/df/e6a6a9a0890092fb64ea5e4e4823edf16a33d7": "95e0adcb076ab23729205e14af32ce10",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a2/747e5c675a10431d43e6bce3951568428ece55": "63ff1aa6064aa15ba15222e0d28e97c3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e2/44828ce71c6db6d075f281096e279f5e93ac27": "f4c41f4ecb8ed7c785ccd6703dcf38f0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0209d265911bf207dac851068c77bf0a978082": "7f32f9e2067e4e051bab547955274040",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/b70d3a11f3e6a5cb8d2b82c48238e36a70b221": "fa1c9e522f4065f7e140d55fae0c216b",
".git/objects/fc/a72c8c3848b0ae2e67d4abcc7e8ccf0393dd0b": "917f168799da3c6c9d38864d3f234cc4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/5904e6c1b3aaab13aebe88809b5b40f15cb9b4": "609a9b6cdc21cb3f9c9fe4a372771666",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/6c91c9e37a6a80c63bfb9009cd30f9c7062bfa": "ab4a29a9af0201118ab14e0e143608bc",
".git/objects/e3/49629f0fb9c133f89946eb044fb8d12a727fa0": "d1965824f90989715e0047aebd7e95e4",
".git/objects/cf/11aab78e64c69ae72d00fdd7b265bcb3cd361b": "c2004798ea55a44925fa5c4e2fd2dd82",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/f8257fc5d443e85227f210f08393ddee060955": "78c4b2e259828bde1f1533c1cd70634f",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fb/08a8d3dbd8ea276f18da68d982c68eb095c35b": "53b67d5aeb1a01a6fbd2563ffdf70b40",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/c6/5e515ab425b437305f78a41b0f21f6c0db0af6": "76299bc8cc03bfa9bd9e1d4400a53974",
".git/objects/20/6e5d0ab77688fba314cbc225904f597463c465": "ce240e74971c39b7f0d53b27f4fb2e87",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/8033102bae3a7f13ba8d28a487760be1edd61a": "68093fa48fcaa9e812bf58ccc1b7174f",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/7c/20fb9b60d2018f38779d4cce17123a133d4365": "2ae8851be6e285ffbaa9d82ab26b58fe",
".git/objects/16/0201b2633cf2f0c12abbceaaf416f433a291e0": "2895aeb0e348808c45753f5683b4f755",
".git/objects/16/59b1e74b58b6ae6a2ebcc77ecd2a71628ebd7a": "d10816c32768153a72b254fe762c4a4b",
".git/objects/89/05026887f439a412a83406e4fc18499e32a9e6": "ff9e0158c0da26d3f275a78d1ce97036",
".git/objects/89/64f6578a48de3c8fc71051ed40c5162897d7e4": "b5792d98c1b75058d5dfe7b362413bff",
".git/objects/1f/055faab8cca3064a47954662e3f84c00d3e7ba": "0b49a6f2a6ece7a3639518bc81a8cc6e",
".git/objects/73/6cbb5895f1f8e2114ddd8aa3bcd697bf840fd1": "508087ef7d0f684124c8b4ec23c9a6f0",
".git/objects/73/7d191256ed5ef3b9ba7d27bd30a580660e01d0": "69eac6344bdbb00d2fd2bc8c1e3a6d47",
".git/objects/87/8e522324e3307d507aba6e351df939fb735cf2": "a9ac625ade0e78f87025a70060a99434",
".git/objects/87/ae952305180f028cd50e23a614184a1d1d0e30": "6e55fe11c0f826e6f5a025c69bd79a97",
".git/objects/80/3889aa1ea0510a99fc0fb4a269a49cbc9aec9f": "de126155c6fe9cdc3ddfbebef7392246",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/0772963f644657e03a2f475d6a181654225065": "3e7c674aab638f370f0145357d028dee",
".git/objects/26/1b1fcc472b6a0eeabf5f055e419e5fdd063e3c": "a4279742da41cc6af32bd49cd2691335",
".git/objects/21/2b773d218601ddd465a3536837c4841db6df6f": "36113acf3f32371918180cc8cfca324e",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/e6599a07e65914dd1c71295ead0c7d555988ac": "5241a541e940e01e3740109cf9e8d6b8",
".git/objects/72/efc417329de9ac5f4129a0ca32d77b46ac380b": "bb5f405a4c3759ca75ff3cb0b16c8f23",
".git/objects/44/021c597d3e8fa42332ec76a1d70add89c9dbbc": "c55e4858372bb8fa9aac9d4caac1bb12",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/e3d31cac6fb4ddcd2dff8b1180c6522c164386": "5f108a13dbea1b06425c7f37cb8b5894",
".git/objects/9a/ec7db5a4efe7091c2ababc231af1d02897b255": "5d76a50703d96f282fa4ff9f8b9b3eb8",
".git/objects/36/1a61dbc8468fa57d0345207091a0dcc53f0e25": "687ef7a16d676d96aa3c06cc750a4906",
".git/objects/36/dec8c600f98170e5249c05d7abbd466989005d": "3653f69c14e9b9271dae4659784b8442",
".git/objects/5d/dfc6da594804c3162996109567f12175448038": "0edff1781d0b348c0b9147a17602af13",
".git/objects/31/631bd7d585b2f60db4e63888628b28e22f6600": "637660da70feec1d2fe90fb20260d29d",
".git/objects/96/9b0d2194a202b8d78012efd35cb30297f9254d": "19f66163a5df46f332215e18d86af6d9",
".git/objects/96/9d7ffd9c9aaba8d0288a7e86ceae574cc28668": "c988f3a2fcf72b29de3af29427e839c1",
".git/objects/98/a6f1de389f60e07561aac23bb693436c27d769": "6233cebcd5818f3105452a9655f80244",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/30/7570700b4bc84ee9a9974b2e40e901c6fcf203": "66343b44e0d8d1c9a52fc9d78194257f",
".git/objects/5e/d13aa67a2c1691a47b6cb4fbe5f27d46e3c74b": "f5eb4ff6b1eacf1804671267d2eb8ee4",
".git/objects/08/918c94183fbe4e1cc279fd41d8a7df20974b08": "f0eceb95d90340b50e51210325be44ba",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/e1b72010a5babf05286a78265d0f886e114347": "6cc9e8e2e383ded4650bb815ddb19cf0",
".git/objects/55/abe4fc35a462eaef026e86cb54e25db4399f9c": "4ba8d08b451dab749387af482e10e731",
".git/objects/55/8f9707df2bdf9f28e4feb2d56876b8e84be77e": "f6c59228fcd1c79b98215dc28a1f0e72",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ea3b8daf81dd21def96b02215c67424f0bc9ac": "f5e7325deea9ac082e66b749bb171ae8",
".git/objects/b1/46090944d40f18c91b33b0bb1f5394c272b2f8": "a33ecc69bcc50256b30b1241b48ac218",
".git/objects/dd/d0e81f0aa57b621155ef54af416dbcd602ca23": "2f2af36e333dc54be863bc8677b395f3",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/a2cdb4b3aa32e7449cfe734329efd50baf01b5": "f93eb1796d4e157bada334e3d89b4081",
".git/objects/aa/6022f106626c3ee14d4b08ccb30b72fb101bb8": "92f8410b22e6971399bfea59a4ca1143",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/371aa4dcaa8ba3887e7f03c9ddbc5ae3503f01": "1808205e0caf0500515cab671ec59f0b",
".git/objects/ef/9be45b298c7144a315ce02c9c6ae4ea42f2d2d": "d8f2eadab2568fad99c63ddd1300f580",
".git/objects/c3/8ea2d20c006332d182cf238bca688b80910d93": "082f6c097062c2a46f1020ecafbef32f",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/cd/4d8b312101ed317c308699e0046d633d45bedc": "6ba03fd790f446e5d2eca9b6a6785669",
".git/objects/c5/faa3cb8cba678efb8045ab0d2f21752f45c815": "f0b65233a2311eb26f5e3a78bf030ed7",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/541ad92e4be78d4b2326bac72e651a57d330d0": "45a2c0790f6958ced99b8f1fa9575183",
".git/objects/e7/2dd3531286e7c986d0e075f9a458243470a3bc": "6dae4710e085b6b1b289008580963e12",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/911642c46cf82f4dc4998123f84cd61306a65d": "4d11971a47c720496b58c3c3b9e08fe4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/8efb9213960d961f6ccea2fc3c7038fd27086e": "f184804ab34a735a3d59b9df95c57131",
".git/objects/41/8a9f044354a23369cc0a0fbead86e7ee886768": "16bfa7f462c5c00e17d1dda940593513",
".git/objects/1b/b717cf850127575632a345a9bff3f44b89f1a3": "1dacc762130d33efba6a1cdaf2ecc2ef",
".git/objects/1e/b264c91ce8e25ffd402b6d69b26377c7159ff2": "c303113cad6eebc60879e7c5e1017fdd",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/13730a563aa98c6f89b6eb3fd1b17ae3a74a65": "2ea97546815d726a2b3caa96a481394e",
".git/objects/8c/c90f4fdbbc49a2ef232fdcaf7da5aef0de9d51": "57aeb2f1adbfc43e145aef5ed4cf9f7c",
".git/objects/85/3f842992252eac56bf3297e3a52af9e094c7db": "37a5e892705fec0d55e84bb17a48b65d",
".git/objects/1d/b5d80ea885b045ca8f16ae913022b5ec9d441a": "94445f58cd423bf721741063858a4b06",
".git/objects/1c/f2ece9381f70cc111fc1d48573eb8ce80c4955": "0572f9620a9a4188fcaf610e24ab460c",
".git/objects/82/e9cd2b288777e87b0970cbde505749bf49d1bc": "85333e67d6064ba4dd67ff4876245674",
".git/objects/40/d5f2fe325d0b39686e519489edf8ddc7a267b3": "e581f29da0a280485a3862142a70a440",
".git/objects/40/956ce0705858a58b746e5b3c9b5db68d0f1951": "269c95ac1094b541d6750b275f000af9",
".git/objects/2e/673d7bcf53a1c40bc247cb5677474f8e1d2a5b": "64627c8c4cde1cec5527a01412b068f4",
".git/objects/2b/2212890663dc3c7cdd9e5e776d472393dc6910": "011fc559aa2e2792214348c824d92170",
".git/objects/78/6064962e4fca8e871d203cd17fae61f6408eca": "71635ebc6e09354f22a29c6102a03544",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/14/bee7ad510975b2ce751a15c069e42b5de9e351": "2f2e9b2bf09bd14dc9c8723a7135008c",
".git/objects/8e/abbbfa0c30e852c63a8055c1e8c938c3b79128": "ebc43b19805c729a390ae53937f8f7d2",
".git/objects/25/007d7b42e27b178386e91f5fed7978456d4bdb": "87056a05e98fd1d817df6afdd10f3cdd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "62a021959db7d5d2c58d1d756271cb75",
".git/logs/refs/heads/main": "8eda55811e2adfe792fefccc02bafc2a",
".git/logs/refs/remotes/origin/main": "b879cd518f3c758abc413c18d4855d2f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "23717e02fb7c87cd8e44e034a5a2afc0",
".git/refs/remotes/origin/main": "23717e02fb7c87cd8e44e034a5a2afc0",
".git/index": "bada806dddc51cbf39a78b57eed92761",
".git/COMMIT_EDITMSG": "c74b6d3def659453e94f84cf5b675888",
"assets/AssetManifest.json": "d4c66e73467c2c606e202685112755aa",
"assets/NOTICES": "66f207e5e3c664dfa91ba31cfb931d33",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8df93481883578a5b82dedd17ab2c600",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e5d253438aaf909d23d94c812449d56d",
"assets/fonts/MaterialIcons-Regular.otf": "2902b56e4b535e6da56a69a50316702d",
"assets/assets/images/soups.png": "b41222c93e01d2e0719966768639aae7",
"assets/assets/images/user_profile.png": "5c5e1b05d1b8d11d2f4be15d51f36ce3",
"assets/assets/images/homescreendrink.jpeg": "2444405537984553236d52b823ae5837",
"assets/assets/images/BANNER1%25201.png": "bdb2ff27c6243131ab8a56636f8ff040",
"assets/assets/images/restaurant.svg": "593156c724f867147cfbedf854339580",
"assets/assets/images/glasses_image.png": "d6c071c3a75bc8b50f69c6417bf2db41",
"assets/assets/images/book.png": "827aa06efc97de671c22c68bcde71c4b",
"assets/assets/images/home.svg": "b7b5fc399496346c3e8583226a80c673",
"assets/assets/images/fml%2520icon.png": "9d7e6ae0d95f028a8b5f9b1dcef52b33",
"assets/assets/images/logout.svg": "2d78b9c0c136028e9648958161618447",
"assets/assets/images/food_notification.png": "d6b35523d4b619dc1d5916ce091d5be6",
"assets/assets/images/order_food.jpeg": "4f6176e3f00e4eb3e218cc8dcdd8f8d9",
"assets/assets/images/Notification%2520screen.%2520image.png": "5e2ac319e733b9ae35a1b7cf6c882fdf",
"assets/assets/images/group_add.png": "3df12fc97e5ceb77722661dfa10d372b",
"assets/assets/images/Image%2520Placed.png": "ebd2851da1eab6b989d40fd60c41f867",
"assets/assets/images/banner2.png": "766836895f6b18bcfd6f4d02648897a6",
"assets/assets/images/searchicon.svg": "919bc2bcc4fdcba53202bf72bb44f214",
"assets/assets/images/banner3.png": "722b15e998a5279d96fae748e8a6575b",
"assets/assets/images/map.png": "d49e6e2f32aaee6756a5b200c19ebe20",
"assets/assets/images/BANNER2%25202.png": "94ef88f52621da2baa54364df417cc47",
"assets/assets/images/Download%2520Icon.png": "50ebb2ef75b9ad1b6c9f779f8271fde4",
"assets/assets/images/drniks.png": "c688ee4ca41516fdf36e58abebc377a5",
"assets/assets/images/outlet_banner.png": "a94560e2cd2c87dd9677043372a6b48b",
"assets/assets/images/home.png": "68fda1a4d7a76c660bcfa3ada2225f90",
"assets/assets/images/default_food.png": "670ff5c67600ef852ef08ac25414bbbd",
"assets/assets/images/account_circle.svg": "f62a198f3a076abde56c8d7a26a8c564",
"assets/assets/images/BANNER3%25203.png": "0223f82be4890591bb807910e6707071",
"assets/assets/images/salads.png": "f862b2f1ede8f6bd755d3223e2ea2735",
"assets/assets/images/Bg%25202.png": "c726f5bc7748bce90440f517618cd14a",
"assets/assets/images/invite_friends.png": "fa76516978644ce1ef00118a0b70f271",
"assets/assets/images/SplashScreen.gif": "4f3b86c12c0a50222ec6ca5db84d7088",
"assets/assets/images/qrcode%25201.png": "1e88fd9c8102d844d7a86c6688701ee8",
"assets/assets/images/Bg%25203.png": "da2aae3225e5cf2af2a116412135523e",
"assets/assets/images/bg%25201.png": "55c7556b5426331ae01475aa5e5f5708",
"assets/assets/images/sell.svg": "f1095da2f0ca7ed40224c3f5bf99e799",
"assets/assets/images/profile_pic.png": "7ce5606f5b3907462c2175f4482fe5b1",
"assets/assets/images/fml%2520icomm%25203.png": "f49a9f60d9b530df3dc1f9751ad0d448",
"assets/assets/images/arrow-left.png": "cebd89b3bbd0ec322297322fd8992f17",
"assets/assets/images/Image%2520Ennroute.png": "b6c7b66ea4d60d8758e8fed1dff7a5da",
"assets/assets/images/location_icon.png": "a9a962936136d1264e3ef12cd2d0210e",
"assets/assets/images/Image%2520sent.png": "c8c795c6eae4f6c807dbc984c276ad11",
"assets/assets/images/appicon.png": "86344b0a071b5612e712a1ebe6679c5a",
"assets/assets/images/outletimg.png": "4ba1f44edee22f24bf91040fac19d428",
"assets/assets/images/frame.svg": "a251cf30917f9592561ab52f968b7f78",
"assets/assets/images/largebeer.png": "6909f95428821367027da32f023772a5",
"assets/assets/images/My%2520Order%2520Screen.png": "3a3a767744801033b3d5b622784d5f6b",
"assets/assets/images/location.svg": "95050fc19cdac5ecebb5b299e543bfd6",
"assets/assets/images/Offfer%2520screen%2520Image.png": "c523ca564a3591c178f816cbc64d7746",
"assets/assets/images/jagar.png": "9b65fda2adcb50979b1923029fabaefc",
"assets/assets/images/veg.png": "9778e84eafff2f322a39a3bc101dc49b",
"assets/assets/images/registrationscreenimg.png": "a00704ecf7a198d108934e3214cd0f3a",
"assets/assets/images/food_menu.svg": "91e0e19014d7e2ef44cfd87c94296d02",
"assets/assets/images/loginscreen.png": "057f70c29ca6bc021d1e2db8b589b285",
"assets/assets/images/notifications.svg": "ab29846cac0145d2f4a480c2fd37d123",
"assets/assets/images/notification.png": "a66433ef15c79bddceced28138595777",
"assets/assets/images/SayajirajePark.png": "f90c56ae7d05e73a83ff53e75e22b7ea",
"assets/assets/images/default_drink.png": "616ce0ade1c6c3c6fe9a2ffeb3407e5d",
"assets/assets/images/clipboard-text.svg": "e36c6373c86c33e5e258950732666d18",
"assets/assets/images/fml_splash.gif": "c978947c0a43a259dbff103a67038379",
"assets/assets/logo/logo.png": "de64f260770bcf2bf29947c5eebde27c",
"assets/assets/logo/fml_logo_960_640_WB.png": "e034392473705f9b05bd57ff31b5e90b",
"assets/assets/logo/splash_logo.png": "cf0335631510aaa9a89807b0ec1cb287",
"assets/assets/map_style.json": "dedc67640c6771ad269b5275c0672b78",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
