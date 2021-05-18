function perfectPowerOf2(n)
{
    let per_pow = 1;
    while (n > 0)
    {
        console.log(`Before: per_pow: ${per_pow}, n: ${n} bits ${n.toString(2)}`);
        per_pow = per_pow << 1;
        n = n >> 1;
                console.log(`After: per_pow: ${per_pow}, n: ${n}`)
    }
    return per_pow;
}
console.log(perfectPowerOf2(34));