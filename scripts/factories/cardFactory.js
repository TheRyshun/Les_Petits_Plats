const cardFactory = (data) => {
  let { id } = data;

  const Card = document.createElement("div");
  Card.classList.add("recipe");
  Card.setAttribute("id", id);

  const Img = document.createElement("div");
  Img.classList.add("recipes__Img");

  Card.appendChild(Img);

  const Content = document.createElement("div");
  Content.classList.add("recipes__Container");
  Card.appendChild(Content);

  const getTopCard = ({ name, time }) => {
    const Title = document.createElement("h2");
    Title.classList.add("recipes__Title");
    Title.textContent = name;

    const Duration = document.createElement("div");
    Duration.classList.add("recipes__Duration");

    const clock = document.createElement("i");
    clock.classList.add("recipe_duration-icon");
    clock.classList.add("fa-solid");
    clock.classList.add("fa-clock");

    const Time = document.createElement("span");
    Time.textContent = time + " min";

    Content.appendChild(Title);
    Duration.appendChild(clock);
    Duration.appendChild(Time);
    Content.appendChild(Duration);

    return [Title, Duration];
  };

  const getIngredients = ({ ingredients }) => {
    const Ingredients = document.createElement("div");
    Ingredients.classList.add("recipes__Ingredients");

    const list = document.createElement("p");
    list.classList.add("ingredient");

    ingredients.forEach((i) => {
      const li = document.createElement("span");
      let text = document.createTextNode("");
      let strong = document.createElement("strong");
      strong.textContent = i.ingredient + " ";
      li.appendChild(strong);

      if (i.quantity && i.quantity) {
        text.textContent += " : " + " " + i.quantity;
      }
      if (i.quantity && i.unit) {
        text.textContent += " " + i.unit;
      }

      li.appendChild(text);
      list.appendChild(li);
    });

    Ingredients.appendChild(list);
    Content.appendChild(Ingredients);

    return Ingredients;
  };

  const getDescription = ({ description }) => {
    const Preparation = document.createElement("p");
    Preparation.classList.add("recipes__Preparation");
    Preparation.textContent = description;
    Content.appendChild(Preparation);

    return Preparation;
  };

  getTopCard(data);
  getIngredients(data);
  getDescription(data);

  return Card;
};

export { cardFactory };
