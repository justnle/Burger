'use strict';

$(() => {
  $(`.change-devour`).on(`click`, function(event) {
    const id = $(this).data(`id`);
    const newDevoured = true;

    const newDevouredState = {
      devoured: newDevoured
    };

    $.ajax(`/api/burgers/${ id }`, {
      type: `PUT`,
      data: newDevouredState
    }).then(() => {
      console.log(`changed devoured to`, newDevoured);
      location.reload();
    });
  });

  $(`.create-burger`).on(`submit`, event => {
    event.preventDefault();

    const newBurger = {
      name: $(`#burger`).val().trim()
    };

    $.ajax(`/api/burgers`, {
      type: `POST`,
      data: newBurger
    }).then(() => {
      console.log(`Added a new burger!`);
      location.reload();
    });
  });

  $(`.trash-burger`).on(`click`, function(event) {
    const id = $(this).data(`id`);

    $.ajax(`/api/burgers/${ id }`, {
      type: `DELETE`
    }).then(() => {
      console.log(`Deleted burger`, id);
      location.reload();
    });
  });
});

