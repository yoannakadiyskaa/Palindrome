function isPalindrome(str) {
    str = str.replace(/[^a-zа-я]/gi, "").toLowerCase();
    return str.split("").reverse().join("") == str;
}