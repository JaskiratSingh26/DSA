/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    if (n == 0) return true

    if(n==1 && flowerbed.length==1 && flowerbed[0]==0)return true

    for (let i = 0; i < flowerbed.length; i++) {


        if (flowerbed[i] == 0 && flowerbed[i + 1] == 0 && flowerbed[i - 1] == 0) {
            flowerbed[i] = 1
            n--
            if (n == 0) return true
        }

        else if (i == 0) {
            if (flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
                flowerbed[i] = 1
                n--
                if (n == 0) return true
            }
        }

        else if (i == flowerbed.length - 1) {
            if (flowerbed[i] == 0 && flowerbed[i - 1] == 0) {
                flowerbed[i] = 1
                n--
                if (n == 0) return true
            }
        }

    }
    return false
};