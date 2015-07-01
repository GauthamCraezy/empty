   BusList = new Mongo.Collection('buses');
if (Meteor.isClient) {
 // Meteor.startup(function() {
   
     // Meteor.subscribe('buses');

 Template.adminpanel.helpers({
    'bus': function(){


      // Retrieve data that belongs to the current user
      return BusList.find({sort: {name: 1}});

    },
    'selectedClass': function(){

        // Get the ID of the player being iterated through
        var busId = this._id;

        // Get the ID of the player that's been clicked
        var selectedBus = Session.get('selectedBus');

         // Do these IDs match?
        if(busId == selectedBus){

            // Return a CSS class
            return "selected"

        }

    },
       'busList':function(){

        var srcVar = Session.get('sourceLocation');
        var destVar = Session.get('destinationLocation');
        var type1Var = Session.get('typeOfBus');
        var type2Var = Session.get('typeOfSeat');
        var busAvailable = BusList.find();
      return busAvailable;
      
    }
      });

  // Events trigger code when certain actions are taken
  Template.adminpanel.events({
      'click .bus': function(){

          // Retrieve the unique ID of the player that's been clicked
          var busId = this._id;

          // Create a session to store the unique ID of the clicked player
          Session.set('selectedBus', busId);

      },
      'click .remove': function(){

        // Get the ID of the player that's been clicked
        var selectedBus = Session.get('selectedBus');

        // Remove a document from the collection
        BusList.remove(selectedBus);

      }
  });

  Template.addBusForm.events({
    'submit form': function(event){

        // Prevent the browser from applying default behaviour to the form
      //  event.preventDefault();

        // Get the value from the "playerName" text field
        NewBusNameVar = event.target.NewBusName.value;
        NewSourceVar = event.target.NewSource.value;
        NewDestinationVar = event.target.NewDestination.value;
        TimingsVar = event.target.Timings.value;
        SeatVar = event.target.Seat.value;
        CostPerSeatVar = event.target.CostPerSeat.value;
        Type1Var = event.target.Type1.value;
        Type2Var = event.target.Type2.value;


        // Insert the new player into the collection
       BusList.insert(
        {
          busName:NewBusNameVar,
          src: NewSourceVar,
          dest: NewDestinationVar,
          costPerSeat:CostPerSeatVar,
          type1:Type1Var,
          type2:Type2Var,
          seats:SeatVar,
          available:SeatVar,
          time: TimingsVar
        });

    }
  });



























    
Template.chooseBus.events({
      'submit form': function(event){
        // Get the value from the "member" text field
          event.preventDefault();
        srcVar = event.target.srcLoc.value;
        destVar = event.target.destLoc.value;
        type1Var = event.target.typeAC.value;
        type2Var = event.target.typeSleeper.value;
      Session.set('sourceLocation', srcVar);
      Session.set('destinationLocation', destVar);
      Session.set('typeOfBus', type1Var);
      Session.set('typeOfSeat', type2Var);
     // document.writeln(srcVar);
     // document.writeln(destVar);
     // document.writeln(type1Var);
     // document.writeln(type2Var);
      
      }
    });
   Template.chooseBus.helpers({
    'busList':function(){

        var srcVar = Session.get('sourceLocation');
        var destVar = Session.get('destinationLocation');
        var type1Var = Session.get('typeOfBus');
        var type2Var = Session.get('typeOfSeat');
        var busAvailable = BusList.find({src: srcVar,dest: destVar,type1:type1Var,type2:type2Var});
      return busAvailable;
      
    }
  });


  //  });
}
  

if(Meteor.isServer) {
   /* Meteor.startup(function () {
      BusList = new Mongo.Collection("buses");
      BusList.allow({
        insert: function () {
          return true;
        },
        update: function () {
          return true;
        },
        remove: function () {
          return true;
        }

      });  
  



      //insert data intially
      if (BusList.find().count() == 0) {
        BusList.insert(
        {
          busName:"Sundara Travels",
          src: "Coimbatore",
          dest: "Bangalore",
          costPerSeat:150,
          type1:"AC",
          type2:"Semi-Sleeper",
          seats:60,
          available:25,
          time: "8 A.M - 3 P.M"
        });
        BusList.insert(
        {
          busName:"KPN Travels",
          src: "Chennai",
          dest: "Bangalore",
          costPerSeat:250,
          type1:"NON-AC",
          type2:"Semi-Sleeper",
          seats:60,
          available:20,
          time: "6 A.M - 4 P.M"
        });
        BusList.insert(
        {
          busName:"SRV Travels",
          src: "Coimbatore",
          dest: "Salem",
          costPerSeat:150,
          type1:"AC",
          type2:"Sleeper",
          seats:30,
          available:4,
          time: "5 A.M - 3 P.M"
        });
      }

    
    Meteor.publish('buses', function(){
    // Return players "owned" by the current user
    return BusList.find();
  });


});*/
}