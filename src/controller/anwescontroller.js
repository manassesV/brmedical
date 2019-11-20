import firebase from 'firebase'


export default class AnswersController{
   



    create(value, question, next, errorcode){
        // Get a reference to the database service
        var user = firebase.auth().currentUser;
        uid = user.uid;

        if(question == "Nome"){
          quiz = "Wiz2";
        }else if(question =="Data_Nascimento"){
          quiz = "Wiz3";
        }
        else if(question =="relacao_sexual"){
          quiz = "Wiz4";
        }
        else if(question =="papa_nicolau"){
          quiz = "Wiz5";
        }
        else if(question =="Data_ult_papan"){
          quiz = "Wiz6";
        }
        else if(question =="Result_papa"){
          quiz = "Wiz7";
        }
        else if(question =="Vac_Hpv"){
          quiz = "F";
        }




        


        firebase.database().ref(uid).ref.child(question).set({
          resposta: value, 
          question: question,
        });

        firebase.database().ref(uid).ref.child("Quiz").set({
          resposta: quiz, 
        });






        next("next");
      }





       
        // console.log(uid);


        // var database = firebase.database();
        // var user = 12455;
        // var ref = database.ref(uid);
        // var postsRef = ref.child("resposta2");

        // var newPostRef = postsRef.push();
        // newPostRef.set({
        //   respostas: value,
        // });
        // 
      
    }
