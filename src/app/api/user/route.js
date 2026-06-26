
let user=[];

export async function GET() {
    return Response.json(user);
}

export async function POST(req) {
    const body=await req.json();

    const newUser={
        id:Date().toString(),
        name:body.name,
        email:body.email
    }
    user.push(newUser)
    return Response.json({
        message:"user created",
        user:newUser
    })
}