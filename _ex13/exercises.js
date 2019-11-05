function jumpingOnClouds(c) {

    let counter = 0,
        i = 0;

    while (i < c.length - 1) {
        i += (c[i + 2] == 0) + 1;
        counter += 1;
    }

    return counter;
};

c = [0, 0, 0, 0, 1, 0];
jumpingOnClouds(c);