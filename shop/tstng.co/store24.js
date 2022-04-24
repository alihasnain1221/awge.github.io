// all current merch for sale
// name: display Name
var merch = {
  // 1: {
  //   name: "Coming Soon",
  //   filename: "StressBall2",
  //   price: " Coming Soon $",
  //   baseSKU: "bitchplease",
  //   sizes: null,
  //   settings: null
  // },
  // 1: {
  //   name: "Dummy Logo Crew Hoodie",
  //   filename: "Dummy%20Logo",
  //   price: "90",
  //   baseSKU: "IGCR-HY-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [0.709, -0.48, 2.88],
  //     minDist: 75,
  //     maxDist: 100,
  //     scale: 0.1
  //   }
  // },
  // 1: {
  //   name: "Dummy Kiss Hoodie",
  //   filename: "INGEN_Dummy",
  //   price: "90",
  //   baseSKU: "IGDU-HY-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [0.709, -0.48, 2.88],
  //     minDist: 75,
  //     maxDist: 100,
  //     scale: 0.1
  //   }
  // },
  // 2: {
  //   name: "Nuts & Bolts Hoodie",
  //   filename: "Nuts&Bolts",
  //   price: "90",
  //   baseSKU: "IGNT-HY-WHT",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [0.709, -0.48, 2.88],
  //     minDist: 75,
  //     maxDist: 100,
  //     scale: 0.1
  //   }
  // },
  // 4: {
  //   name: "Coach Jacket",
  //   filename: "Jacket",
  //   price: "150",
  //   baseSKU: "IGCJ-JK-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 100,
  //     maxDist: 200,
  //     scale: 0.2
  //   }
  // },
  1: {
    name: "Crash Hat",
    filename: "Crash",
    price: "20",
    baseSKU: "IGCR-HT-WHT",
    sizes: null,
    settings: {
      pos: [4.6, -2.4, -6.7],
      minDist: 0.3,
      maxDist: 0.5
    }
  },
  // 4: {
  //   name: "Broken Glass Tee",
  //   filename: "Purple_Ingen",
  //   price: "60",
  //   baseSKU: "IGBG-SS-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 1,
  //     maxDist: 2
  //   }
  // },
  // 7: {
  //   name: "Skull Tee",
  //   filename: "Skull_Black",
  //   price: "40",
  //   baseSKU: "IGEN-SS-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 1,
  //     maxDist: 2
  //   }
  // },
  // 8: {
  //   name: "Beavis Black Tee",
  //   filename: "BeavisBlack",
  //   price: "40",
  //   baseSKU: "IGBV-SS-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 1,
  //     maxDist: 2
  //   }
  // },
  // 9: {
  //   name: "Beavis White Tee",
  //   filename: "BeavisWhite",
  //   price: "40",
  //   baseSKU: "IGBV-SS-WHT",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 1,
  //     maxDist: 2
  //   }
  // },
  // 10: {
  //   name: "Nuts & Bolts Tee",
  //   filename: "YellowCollar",
  //   price: "60",
  //   baseSKU: "IGNT-SS-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 1,
  //     maxDist: 2
  //   }
  // },
  // 5: {
  //   name: "Testing Tee",
  //   filename: "TestingTee",
  //   price: "40",
  //   baseSKU: "IGTS-SS-WHT",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 1,
  //     maxDist: 2
  //   }
  // },
  2: {
    name: "Suck It Tee",
    filename: "SuckIt",
    price: "40",
    baseSKU: "IGSU-SS-WHT",
    sizes: ["SM", "MD", "LG", "XL"],
    settings: {
      pos: [-7.6, -2.4, 15.7],
      minDist: 1,
      maxDist: 2
    }
  },
  // 13: {
  //   name: "Crash White Long Sleeve",
  //   filename: "CrashWhiteLS",
  //   price: "60",
  //   baseSKU: "IGTS-LS-WHT",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 60,
  //     maxDist: 75
  //   }
  // },
  // 7: {
  //   name: "Dummy Long Sleeve",
  //   filename: "Dummy_LS",
  //   price: "60",
  //   baseSKU: "IGDU-LS-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 60,
  //     maxDist: 75
  //   }
  // },
  // 15: {
  //   name: "Black Beanie",
  //   filename: "Black%20Beanie",
  //   price: "30",
  //   baseSKU: "IGTS-BN-BLK",
  //   sizes: null,
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 500,
  //     maxDist: 750
  //   }
  // },
  // 16: {
  //   name: "Yellow Beanie",
  //   filename: "Yellow%20Beanie",
  //   price: "30",
  //   baseSKU: "IGTS-BN-YEL",
  //   sizes: null,
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 500,
  //     maxDist: 750
  //   }
  // },
  3: {
    name: "3M Reflective Joggers",
    filename: "Trackpants",
    price: "100",
    baseSKU: "IGTS-PT-3MM",
    sizes: ["SM", "MD", "LG", "XL"],
    settings: {
      pos: [-7.6, -2.4, 15.7],
      minDist: 200,
      maxDist: 300,
      scale: 0.2
    }
  },
  // 18: {
  //   name: "Dirtbike Hat",
  //   filename: "Dirtbike",
  //   price: "30",
  //   baseSKU: "IGDT-HT-BLK",
  //   sizes: null,
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 150,
  //     maxDist: 200
  //   }
  // },
  // 19: {
  //   name: "Testing Pillow",
  //   filename: "Pillow",
  //   price: "30",
  //   baseSKU: "IGTS-TP-BLK-PW",
  //   sizes: null,
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 500,
  //     maxDist: 750,
  //     scale: 0.5
  //   }
  // },
  4: {
    name: "Dummy Toy",
    filename: "Dummy%20Toy",
    price: "80",
    baseSKU: "IGTS-TO-DU",
    sizes: null,
    settings: {
      pos: [-7.6, -2.4, 15.7],
      minDist: 500,
      maxDist: 750
    }
  },
  // 21: {
  //   name: "Stickerpack",
  //   filename: "Stickerpack",
  //   price: "20",
  //   baseSKU: "IGTS-4P-BUMPER",
  //   sizes: null,
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 500,
  //     maxDist: 750
  //   }
  // },
  // 22: {
  //   name: "Crash Bandana",
  //   filename: "Testing%20Bandana",
  //   price: "30",
  //   baseSKU: "IGTS-BN-WHT",
  //   sizes: null,
  //   settings: {
  //     pos: [-7.6, -2.4, 15.7],
  //     minDist: 500,
  //     maxDist: 750
  //   }
  // },
  5: {
    name: "Testing Stress Ball",
    filename: "StressBall",
    price: "10",
    baseSKU: "IGTS-SB-STRE",
    sizes: null,
    settings: {
      pos: [-7.6, -2.4, 15.7],
      minDist: 500,
      maxDist: 750
    }
  },
  6: {
    name: "Smiley Stress Ball",
    filename: "StressBall2",
    price: "10",
    baseSKU: "IGSM-SB-STRE",
    sizes: null,
    settings: {
      pos: [-7.6, -2.4, 15.7],
      minDist: 500,
      maxDist: 750
    }
  }
  // 25: {
  //   name: "11 X 17 3D LENTICULAR POSTER",
  //   filename: "Poster",
  //   price: "30",
  //   baseSKU: "IG3D-PO-POS",
  //   sizes: null,
  //   settings: null
  // }
};

$.fn.cart = function(opts) {
  opts = $.extend({}, jQuery.fn.cart.defs, opts);

  jQuery.fn.cart.defs = {};

  var instance = this;
  var element = $(this);

  var cartModal = $("#cartmodal");
  var cartModalOverlay = $("#cartmodal-overlay");
  var cartClose = $("#cart-close");
  var cartContent = $("#cart-content");
  var cartCheckout = $("#cart-checkout");

  //checkout
  var checkoutShipping, checkoutEmail, orderData, shopClient;
  var items = [];
  var shopifySKU = {};
  const activecollection = 40735899703;

  this.initialize = function() {
    // terminiology:
    // baseSKU: sku without size, corresponds to shopify, i.e. testing-hoodie
    // sku: sku corresponding to shopify, i.e. testing-hoodie-L

    // sizes: S, M, L, XL, OSFA

    shopClient = ShopifyBuy.buildClient({
      storefrontAccessToken: "def010462f108817d86f3213e083ccde",
      domain: "awge-2018.myshopify.com",
      appId: "6"
    });

    shopClient.collection.fetchAllWithProducts().then(function(collections) {
      collections.forEach(function(collection) {
        collection.products.forEach(function(product) {
          product.variants.forEach(function(variant) {
            shopifySKU[variant.sku] = variant;
            items.push(variant);
          });
        });
      });
      store.updateItem();
    });

    cartClose.click(this.closeCart);

    cartModalOverlay.click(
      {
        cart: this
      },
      function(event) {
        if (event.target == cartModalOverlay.get(0)) {
          event.data.cart.closeCart();
        }
      }
    );

    cartCheckout.click(
      {
        cart: this
      },
      function(event) {
        var cart = event.data.cart.getCart();
        if (Object.keys(cart).length > 0) {
          event.data.cart.openCheckoutLink();
        }
      }
    );

    this.refreshCartModal();

    return this;
  };

  this.getCart = function() {
    // get cart from local storage then clean it, making sure all sku's are valid
    // check validity in case of sku changes over time
    try {
      var cart =
        localStorage["cart"] == null ? {} : JSON.parse(localStorage["cart"]);

      if (Object.keys(cart).length == 0) {
        return cart;
      }

      var deleted = false;
      for (var i = Object.keys(cart).length - 1; i >= 0; i--) {
        var sku = Object.keys(cart)[i];
        var baseSKU = sku.substring(0, sku.lastIndexOf("-"));

        var hasBaseSKU = false;
        for (var x = 1; x <= Object.keys(merch).length; x++) {
          if (merch[x].baseSKU == baseSKU) {
            hasBaseSKU = true;
            break;
          }
        }

        if (!hasBaseSKU) {
          console.log("Error Getting Cart - Removing Bad Item... ");
          deleted = true;
          delete cart[sku];
        }
      }

      if (!deleted) return cart;

      this.setCart(cart);
      return cart;
    } catch (e) {
      console.log("Error Getting Cart - Emptying... " + " :: " + e);
      localStorage["cart"] = "{}";
      return JSON.parse(localStorage["cart"]);
    }
  };

  this.setCart = function(newCart) {
    // save cart object to local storage
    try {
      localStorage["cart"] = JSON.stringify(newCart);
      this.refreshCartModal();
    } catch (e) {
      console.log("Error Setting Cart - Emptying... " + " :: " + e);
      localStorage["cart"] = "{}";
      return JSON.parse(localStorage["cart"]);
    }
  };

  this.refreshCartModal = function() {
    cartContent.html("");
    var cart = this.getCart();

    for (var i = 0; i < Object.keys(cart).length; i++) {
      var sku = Object.keys(cart)[i];
      var baseSKU = sku.substring(0, sku.lastIndexOf("-"));
      var index = -1;

      if (cart[sku] == 0) {
        continue;
      }

      for (var x = 1; x <= Object.keys(merch).length; x++) {
        if (merch[x].baseSKU == baseSKU) {
          index = x;
          break;
        }
      }

      var item = merch[index];
      var size = sku.split("-")[sku.split("-").length - 1];

      $(cartContent).append(
        '<div id="' +
          sku +
          '" class="cartitem">\
                <div class="cartitem-delete">\
                    <button onclick="store.getCart().remove(\'' +
          sku +
          '\')">x</button>\
                </div>\
                <div class="cartitem-image" style="background-image: url(merch/' +
          item.filename +
          '.gif)"></div>\
                <div class="cartitem-name">\
                    <h1>' +
          item.name +
          (size == "OS" ? "" : " - " + size) +
          '</h1>\
                </div>\
                <div class="cartitem-quantity">\
                    <h1>' +
          cart[sku] +
          '</h1>\
                </div>\
                <div class="cartitem-price">\
                    <h1>$' +
          parseFloat(item.price) * parseFloat(cart[sku]) +
          "</h1>\
                </div>\
            </div>"
      );
    }

    if ($(cartContent).html() == "") {
      $(cartContent).append(
        '<div class="cartheader">YOUR CART IS EMPTY...</div>'
      );
    }
  };

  this.add = function(index, size) {
    var sku = merch[index].baseSKU + "-" + size;

    var cart = this.getCart();
    if (cart[sku] == null) {
      cart[sku] = 0;
    }
    cart[sku]++;

    this.setCart(cart);
  };

  this.remove = function(sku) {
    var cart = this.getCart();
    delete cart[sku];
    this.setCart(cart);
  };

  this.openCart = function() {
    cartModalOverlay.addClass("open");
    setTimeout(function() {
      cartModal.addClass("open");
    }, 400);
  };

  this.closeCart = function() {
    cartModal.removeClass("open");
    setTimeout(function() {
      cartModalOverlay.removeClass("open");
    }, 400);
  };

  this.openCheckoutLink = function() {
    var cart = this.getCart();
    shopClient.checkout.create().then(function(checkout) {
      var lineItems = [];
      for (var i = 0; i < Object.keys(cart).length; i++) {
        var id = Object.keys(cart)[i];
        var variant = shopifySKU[id];
        lineItems.push({ variantId: variant.id, quantity: cart[id] });
      }
      shopClient.checkout
        .addLineItems(checkout.id, lineItems)
        .then(function(finalCheckout) {
          console.log("checkout");
          console.log(finalCheckout);

          localStorage["cart"] = "dicks";

          window.location = finalCheckout.webUrl;
        });
    });
  };

  this.isOutOfStock = function(sku) {
    if (shopifySKU[sku] == null) {
      return true;
    }
    return !shopifySKU[sku].available;
  };

  return this.initialize();
};

$.fn.store = function(opts) {
  opts = $.extend({}, jQuery.fn.store.defs, opts);

  jQuery.fn.store.defs = {};

  var instance = this;
  var element = $(this);

  // DOM
  var storePrev = $("#store-prev");
  var storeNext = $("#store-next");
  var storeProg = $("#store-prog");
  var storeImage = $("#store-image");
  var storeBuy = $("#store-buy");
  var storeSizes = $("#storesizes");
  var storePrice = $("#store-price");
  var storeCart = $("#store-cart");
  var storeCart2 = $("#store-cart-2");

  // local vars
  var cart;
  var model;
  var storePos = 1;
  var storeTotal = Object.keys(merch).length;

  this.initialize = function() {
    cart = $("#store").cart({});
    model = $("#model-modal").model({});

    this.updateItem();

    storePrev.click(
      {
        store: this
      },
      function(event) {
        storePos -= 1;
        if (storePos < 1) storePos = storeTotal;
        event.data.store.updateItem();
      }
    );

    storeNext.click(
      {
        store: this
      },
      function(event) {
        storePos += 1;
        if (storePos > storeTotal) storePos = 1;
        event.data.store.updateItem();
      }
    );

    storeBuy.click(function() {
      var size = storeSizes.find(".active").html();
      if (size == null) return;
      cart.add(storePos, size);
      cart.openCart();
    });

    storeCart.click(function() {
      cart.openCart();
    });

    storeCart2.click(function() {
      cart.openCart();
    });

    return this;
  };

  this.updateItem = function() {
    var item = merch[storePos];

    storeProg.html(storePos + "/" + storeTotal);
    storePrice.html("$" + item.price);
    storeImage.css("background-image", "url(merch/" + item.filename + ".gif)");
    storeImage.off("click");
    storeImage.click(function() {
      if (item.settings) {
        model.openModal();
        model.loadModel(item.filename, item.settings);
      }
    });
    storeSizes.html("");
    $("#store-message").html(item.message ? item.message : "");

    if (item.sizes == null) {
      if (cart.isOutOfStock(item.baseSKU + "-OS")) {
        storeSizes.html("<button class='storesizeout'>OS</button>");
      } else {
        storeSizes.html("<button class='storesize active'>OS</button>");
      }
    } else {
      item.sizes.forEach(function(element) {
        if (cart.isOutOfStock(item.baseSKU + "-" + element)) {
          storeSizes.append(
            "<button class='storesizeout'>" + element + "</button>"
          );
        } else {
          storeSizes.append(
            "<button class='storesize'>" + element + "</button>"
          );
        }
      });
      $($(".storesize")[0]).addClass("active");
    }

    $(".storesize").click(function() {
      $(".active").removeClass("active");
      $(this).addClass("active");
    });
    var size = storeSizes.find(".active").html();
    if (size == null) $("#store-buy").html("SOLD OUT");
    else $("#store-buy").html("ADD TO CART");
  };

  this.getCart = function() {
    return cart;
  };

  this.getModel = function() {
    return model;
  };

  return this.initialize();
};

$.fn.model = function(opts) {
  pts = $.extend({}, jQuery.fn.store.defs, opts);

  jQuery.fn.store.defs = {};

  var instance = this;
  var container = $(this);

  var scene, camera, renderer, controls, object;

  // DOM
  var modelLoad = $("#model-loading");
  var modelModal = $("#model-modal");
  var modelClose = $("#model-close");

  this.initialize = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true });
    var loader = new THREE.JSONLoader();

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); //0xfD35144
    //#D35144
    //scene.background = new THREE.Color(0xf1B1B1B);
    container.append(renderer.domElement);

    var light = new THREE.AmbientLight(0xe0e0e0); // soft white light
    scene.add(light);

    camera.position.z = 5;

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;

    window.addEventListener("resize", function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    modelClose.click(this.closeModal);

    return this;
  };

  this.animateModel = function() {
    renderer.render(scene, camera);
    controls.update();
  };

  this.animateModelLoading = function() {
    var loadText = "Loading";
    var num = (modelLoad.text().match(/\./g) || []).length;
    num++;
    if (num > 3) num = 1;
    for (var i = 0; i < num; i++) {
      loadText += ".";
    }
    modelLoad.text(loadText);
  };

  this.showModelLoading = function() {
    modelLoad.animate(
      {
        opacity: 1
      },
      1000
    );
    return setInterval(this.animateModelLoading, 400);
  };

  this.hideModelLoading = function(id) {
    modelLoad.animate(
      {
        opacity: 0
      },
      750
    );
    setTimeout(function() {
      clearInterval(id);
    }, 1000);
  };

  this.loadModel = function(name, settings) {
    var onProgress = function(xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = (xhr.loaded / xhr.total) * 100;
        console.log(Math.round(percentComplete, 2) + "% downloaded");
      }
    };

    var onError = function(xhr) {};

    if (object != null) {
      scene.remove(object);
    }

    var loadingID = this.showModelLoading();
    var func = this.hideModelLoading;
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath("/merch/");
    mtlLoader.load(name + ".mtl", function(materials) {
      materials.preload();
      var objLoader = new THREE.OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath("/merch/");
      objLoader.load(
        name + ".obj",
        function(objectOBJ) {
          func(loadingID);
          setTimeout(function() {
            object = objectOBJ;
            object.position.y = 0;

            camera.position.x = settings.pos[0];
            camera.position.y = settings.pos[1];
            camera.position.z = settings.pos[2];
            controls.minDistance = settings.minDist;
            controls.maxDistance = settings.maxDist;
            if (settings.scale)
              object.scale.set(settings.scale, settings.scale, settings.scale);

            scene.add(object);
          }, 750);
        },
        onProgress,
        onError
      );
    });
  };

  this.openModal = function() {
    $("#wrapper").addClass("closed");
    setTimeout(function() {
      modelModal.addClass("open");
    }, 400);
  };

  this.closeModal = function() {
    modelModal.removeClass("open");
    setTimeout(function() {
      $("#wrapper").removeClass("closed");
    }, 400);
  };

  this.getCamera = function() {
    return camera;
  };

  this.getControls = function() {
    return controls;
  };

  return this.initialize();
};

var store = $("#store").store({});

function animateModel() {
  requestAnimationFrame(animateModel);
  store.getModel().animateModel();
}

animateModel();
var audio2 = document.getElementById("audio2");
$("html").click(function() {
  audio2.play();
});
