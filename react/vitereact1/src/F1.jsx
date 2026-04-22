function F1(){

    const name="Guest";
    const a=7;
    let b=0;
    if(a%2==0)
        b=a*a;
    else
        b=a*a*a;

    return (
    <>
    <h1>This is heading 1 for {name}</h1>
    <h3 className="h3">Square Multiplication of {a} = {b}</h3>
    </>
    );  
}
export default F1;