import {PrismaClient} from "@prisma/client"

const prisma =  new PrismaClient()

async function main(){
    //Para agregar los datos
    // const newUser = await prisma.user.create({
    //      data:{
    //          name:"Pepito",
    //          email: "Pepito@gmail.com"
    //      }
    //  })
    //  console.log(newUser)

    //Para ver todos los datos
    // const users = await prisma.user.findMany()

        //Para encontrar la primera concidencia
    // const users =  await prisma.user.findFirst({
    //     //Puedo buscarlo por lo que quiero
    //     //where: {id:2, email: "Maria@gmail.com"}
    //     where:{
    //         AND:[
    //             {id:2},
    //             {email:"Maria@gmail.com"}
    //         ]
    //     }
    // })
    // console.log(users)

    //Funcion para eliminar
    // const user =  await prisma.user.delete({
    //     where:{
    //         id:1
    //     }
    // })

    // console.log(user)

    //<Forma para actualizar
//     const user = await prisma.user.update({
//         where:{
//             id:2
//         },
//         data:{
//             lastname: "Elizondo"
//         }
//     })



//     console.log(user)

//Haciendo un update many puede editar los campos que quiera  y ademas where puede ser el caracter que sea igual
    //   const user = await prisma.user.updateMany({
    //       where:{
    //           name:"Pepito"
    //       },
    //       data:{
    //           lastname: "Perez"
    //       }
    //   })
    //   console.log(user)
   
    const users = await prisma.user.findMany()
    console.log(users)

    //El upsert, sirve para buscar un usuario, sino existe lo crea y si existe, lo actualiza
    await prisma.user.upsert({
        where:{email:"Maria@gmail.com"}, 
        create:{//Aqui se debe poner el correo requerido
            email:"Maria@gmail.com", 
            name:"Roxana"
        },
        update:{
            lastname:"Roxana"
        },
    })
}

main()