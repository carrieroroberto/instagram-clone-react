import { useState } from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Post from "./components/Post/Post";

export default function App() {
  // state
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "bobby",
      avatar:
        "https://www.archilibri.it/archi/wp-content/uploads/2015/09/img_avatar.png",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 725,
      caption: "don't lie to me"
    },
    {
      id: 2,
      username: "nobody",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcWFRYWFRYZGRgaHBgcHRocGBwYHB8aHRkaGhocHBweJC4lHR4rHx0cJzgmKy80NTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs3NjQ6NDQ0NDQ0PTY0NDQ0NTQ0PzQ0NDQ0NDQ0NjY0MTQ0NDQ0NDQ0NDQxNDQ0NDQ0NP/AABEIANcA1wMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwYCBAUBB//EAEAQAAIBAgMFBQUGBAUEAwAAAAECAAMRBBIhBTFBUWEGcYGRoRMiMlKxQmJywdHwM4KS4RQVU6KyI0PS8ReDwv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACURAQEAAgEEAQQDAQAAAAAAAAABAhEDEiExQVEEEyJxYYGRMv/aAAwDAQACEQMRAD8A6kREBERATkbdxK5DTBu5KGw1sAwa7ct0l2vtAoMifGw78o+Y/kJwkS3UnUk6knmTxM48vJrtGjh4rb1XwKoF7DfPLX7pnMRMjayiY2jL+7mBlE8t+7z2AiIhJESP2Y4XHcfy3QhJPMwvbjIzS+83nb6TJEA3CDuziIhKOrTzC247wRvB4GdbZ+2rAJX91twf7Ld54Gc2YtuOl+k6Y53Hw5cnHMp3W1HDC6kEcwbiZSl4fC5z/wBJGP3gSijvMtOzcIaaWZ2djqSWJA6LfcJqxyuXpizwmPvbbiIl3MiIgIiICRYmtkRnIJsL2AuT0ElnG2ljqwuiUmUa/wDU+LTmANAe+RldRbGbrkLULM7PfOT71xax4KOgGkzkdEDKLbjrc7zfies9drCYLd16WM1ixd9bCSzTdrW7x9RebkUlIiJCxERAREwZiOFx0OvkYQziRe0+63lPQSeFu/U+Qg2kieARCXsTxTcXEwNIXvb1IhDIPckcplPFFtBBMDPC4p6R9yzKdShNhfmp4GdWlt+mfjDUz1UkeBW84iPcnpJsPhHqtlAIT7T8LcQvM/SdsM8v+Yz8nHhrqvZZ8PXV1DIbqdxkkxRAoAAsAAAOg3TKa2IiIgIiICaO2cRkpPzYZV/E2gt9fCbrdN8rO1sPWBNR8hAIAszELfS4W3rKZ2ydl8MZcu9a1NLADkAJHWOoHj+/WSqNNTfrIHOp/fD/ANzE9H07ey9mZ8JiqltcpVO5LVGI72AH8s5gNxefQezuGC4WkpHxJmI/HdyD/VKJjcIaNR6R+wfd6odUPl6gyarPKBGvMppO5TXgDYjnrabatfpwIOhB4gjgZFi0vplEhNexsR/ee+2HI+V/pGk7iWJF7dev9LfpHth18rfWRo3EsSL2vSYlzGjaVmtIarm2nh3zwAk2AJPIAk+Qmf8Ah3vfI9/wt+ktIrckiLYAcgBBcTJdn1m3Uqp/+tz+Wk26PZ3FPuosBzYqgHfc39JGjqjntU5SJ3O7eTuH74TrbT7OV6VP2jFLAjMEJYgH7VyALXt5zk0qXLxPGTrSN2pkTKOfE9TNnZdeoHtSsyuQWBBKrza43acJCBN/YmFVmZyD7pAFiQC1rm4GhtpL8W7kpzamLvxETYwEREBERASHF0A6Oh+0CP0PnJogU3Dk2s3xKSp7xpNdzox/F9TOntWlkrtbdUUP4jRvyPjOZifhaYssenLT0ccurCV9bwiZUQDcFUeQE0e02w/boHQD2qDThmXeUJ9QeB7zOmhBAI3EC03JWFfGMTT1ZWBVhoykWZT1EtWysDTx1Ee9kxVMBHYa5wBZGdftAjjvuJa9qbDo4j+IgLDc491x/MN46HScKh2J9nUFSjiXQjddVY25HcCOhEtFbVa2psGtSv7SmSo+2gzpbrbVfECcYKfsm/8AuHnvHjPtonPx2w8PW1qUUYn7Vsrf1LY+shO3yOixY5bC/wCNQD3FiNek6a7FxJFxQcjnYfrLliOwuFbcaidFe/8AzBkmB7IpR/h4jEoOQqJl8VyWMnUR1VT6PZvFPuosOrMij1a/pO1gew7mxrVAo4qgzH+tgAP6TLtSTKoBYtYWubXPU2AF5nITutHZmx6WHFqaAE72OrHvY6+G6b0RCCDEQNGtSDqyMLqwKkdCLGfJwhUlL6qSp/lNj9J9cafJKjhnduDO7eBcmR6Wnlm7ZQTyEsWxqGSigO8jMe9tf7eErhp53Sn87C/4Rq3pLjO/Bj5rh9Tl3mJERNDKREQEREBERA4vaRNKb/K+U9zD9QJwsYvut3S0bcpZqDjiBmH8pzflK05vbqJm5prKVs4LvGx9S2XVz0qT/MiHzUGdSVnsdULYWnf7JZb8wrED0sPCWacnSkTFqgG8jzmP+IT51/qEI0kieBr7p7CSJ4GnsIInhYaa7909gIgm2+YGunzr/UINM4mK1AdxB8ZlCXI21ivZUar8VRiPxWsvqRPluGTRR0EvPb+vagqD/uOoP4Vux9QspVKRfCZ5b+wqeau78KagD8Tf2vLJOP2ap2pF+NRmbwvYfQ+c7E2cc1jGLkvVlaRES7mREQEREBERAxdLgg7iCPOUpBZQDvF18iRPoGzNmGsrOXZRcgAdOMpO0sN7OtWS98rtru0NmH1mTPOZeI28fHcPNXnskbYOmTprUJvy9o5v5SfF42rV92iCifOfdJ7uIHdIuygBwlG+ujf82naqppmHK9t3DrOVm3bGyd9K6NgE6tU1/Df1JExbs+3Bx5ETpJinb4QvgHqf8Rb1mhX7QU0+KtTGpGqONRvGp3ynRHXryntF/kTjc6+ZH5SVMDiV3VCP52tFDtFTb4XR9QNMy6nQACzXM6mHxRZgjI6sb/EpA037wD6R0wueX8NrZeD9mupLM1izHUk2+k3Z4ons6yaZ7d3dau0MGKi5blWBurDeDK/UwGJOhqE/ztaWqcvHYrK+VVdmIvZVJ03cLn0lbJV+PKzs4Z2FUOrOt+9j+UyGwG4uPIyTEdo6aXDuiWJU3LEhgSCpFhY3B06TGj2jpP8ADWpm33X/AFlOmOv3MvkbYBGq1Nfw29bzcwmKrUTlqgunzj3ivU8SO+SNinX4gv8AMr0/VhadHDLdQx4i9rg+o0kzHv2Vyy3O/dWe2+Ez0VrKb+zN9NQUawbxGhvyBlIZrKx6GfVMdQD0qiW0ZHB8QZ8s2fR9p7NP9R0TzYAnyl3LwtuAo5KaLyVQe+2vrNibO09mGiquHZhcAg9eM1pr485lP0x8vHcNXe9kRE6ORERAREQEREDawLOcM602ysjsTbfly3sOt/pKbtqmRXcli2dab3bU6rY/SXLYdbLWZDuceo1+macHtbgij0zbT2QW/VWY+fvTBrVs/p6e9yX57rB2Ne+EpdM4PhUaWSlYgZgCOIO498pXYLE+5Vpner5x+Fx+qnzl0oHST7Uvh16eMU9J8w7SdlX9+nTpo6s5daoF6ig/YPvCw8Nd/de4nS8lscpxyXs+fdluxlQVF9r7qq6sxYgFspuFUAk68+s+l49VbKwIzLfyYajzA8pqxI6u1h9vvvZEwrvYd5Amco6E2cAqhmdiMxCrbkASfUn0E1ok43pu1cseqaUntV2VcmstGmjrVfOHtepTYtmZV94WBJIvY6Gczs/2IqZ8tT3UJGZiQPdB1VRcksdZ9JiTctomHZ1amMUcb905VbLqQAAb6Ddc74mFY6Rlnb5MMJj4aWJfKjt8qsfIEz5dsNLvS1K2LvcbxkR2Fjw1AHjPoHarEZMJWPNMv9ZCfnKb2Wwueqqfcf6AH6yl8O08rXjncYdFqG7OykHjltex6g/Was2tu1s1ZVG5B6nX6ZZqzvwY9rWf6m7sn9kRE0MpERAREQERECKqxUq670IPrLDthBUoMbXDIGH/ACE4FUe6e4zuYeuq4VGbdly24nUiwmPmmsv3G76fK3GfxXL2dsQJUp16DWVls9MnTKwBOU8wbGx5HWWigd85Gw3vSAO9Sym+/ff6GdWidZzxu46ZTVsTxESyhETXxdSwtz+kEm0GIrgsOVwB1PSb84WBa2JOf5fc5X0vb707srLtbOa1CIiWVIiICR1zukkhrnWEzyrvavBvWRKa6LnLu3AKik2PUki3dJuzuBSjSD5RmyszMd9tTpyFgNJtbYqZaT8z7o8Tb6XkNaqpwjMp0CqvUaqpBlLe7rMe37unGpMWLO29yT6yWY0x7o7hMpuwnTjI87ly6s7SIiXcyIiAiIgIiIAidbYDK9JUaxKMTY95INvE+U5MiegrG5nHlwuWrHfh5JjuX27uHYDEVkBBDZW0N7Hc3jczoodRKtgyKdRGG4nKf5tJZ5muNxuq17mUljbieKdJ7JUJHWohpJMEqqSQGBI0Njex5HkYJtqV9mq4FzqCCDbUEbiJvREaTbb5IiR1a6pbMwW/M2hCSIiAmtUOpmyTNQyKnFoY5gatBCQBmzG5t8I08zMdvlUpFFsC7g28QSbd4HnOXtFg9V77lso8N/reQJQVTcS2HFllN+qnPlxw7d9z0lAiIm15xERAREQEREBERAREQMKiXBEsGzcVnQH7Q0YdR+7zhT2lWam2dNfmX5h+s4c2G/yjTwZyfjVuotpaZzQweLVwHQ3HHmOh6zeU3meV3ymq9kL4VCb2seakqfEra8miSiXTSbZ9/wDuVR3OfzkZ2Qp3vVPe5nQdbgjnNFMC4OtVyOWb8wL+srZPheW/LH/JaXEM3e7frNjD7PppqiKDztc+Z1myBEnUVuVvsiIJkoYVm0nPx2JCIzHfwHM8BJ8ViVUF2NgP35ytYjENVbO2ij4V5dT1iY3K6idzHHdR0lsNd51PeZnETbjJJqMOWVyttIiJKpERAREQEREBERAREQEREDBKrI6lN7GxXg3ISy7PxyuNNCNGU71PUSuIL1KQ++p8iJ3cVggxzocjjcw49GHETDyTWd09Hjsy45v/AF1hE5WG2llOSqMjcPlb8J/KdUGRLtFxs8kRElBEQTATTx2MVFux04DiTyAkGL2l72SmM78huHVjw7pHh8HY53Od+fBeijh3ytvwvjjrvXErYk1jmbRR8K8O88zEhwwsCORIk018Mkxl+WT6jK3Oz4IiJ1cCIiAiIgIiICIiAiY1HCgsxAA3kmwHjOLiO0S3IpIznn8K+ZgdyDKtUxuIfe6oOSLc+Zmu2EDau7ufvMTAtFXH00+Kog6FhfymsNu0CwUPck2+FreJtaVivhwhzqgI4qdfEE7pk6Zlu7gIeC6Dpqd8C+7HTPiFI1VASe+1h6keUtL077pTOw+3kIGHeyv9h7ZfaKN1+bj1l2mPLGzK7bscpZNeI08RhwwKuoI6zSWhUp/wnzL8ja/0tvE7MjVQb8wSP09JzsXmVaA2wq/xEdDzIzL4Mu+Z/wCdUP8AUHk36Tc9iJj/AIVeXoI/JP4/DSbbKn+GjueikDxJ3SJ6dWp8bZF+RN/i/wCk6goielVAueHONW+TcniNTDYZUAVFAH73njNtKVt80sBVNRmqbk+FBzF/ebxIHlOhJiMt77qdjU9nVdW0BbMvc2v9vCcw7doZipexBt8LW8Da03u3G30AOHTKXOjvbMKanhfgx9JT6FPItiVKAXvbX9DNXDMpNXwy81xyu559rXSx9N/hqIegYX8psiUelh1c52UBfsi1r/eNpsU8KE+BnT8LkTq4LhErCY2um5w45Ov/AOlsZuUO0KggVUZDz+JfMQO3ExpuGAZSCDuINwfGZQEREBI69ZUUuxsoFyZJKzt7Fe0qCip9xPefqeA/fPpA521sW9YoWOVGYBU6fMes2TVUacuAE1azZqiclDHy/vPCYGwcTyEwOJPSQxAzaoTxmuihGzZcy8t+XqJLECYA1ACfdTQi3xG243+z4ayy7F7cFBkxAZ0Gi1V+K33xx/EJT2pHXKbX3jge+0zOKBKqyhOZ4WHAfvSVywmU7rY5XG7j61h9to6B1DZD9rLdfErcCSpiR8akMp+K2unPTiOXUz5Xh0em2ehUZGPFWsD3jcROinaLEqbuiOeLqCjnvK+6fFTM+XDl6rVjzY+5p9RVgRcag8Z7PnuzO22QkVKL5DrZMrEHjYGwseWnOdT/AOQMP/pYj+hP/OV6MvguePqrcTOVWLVzlUkUwbO3zfdX8zK5i+2qvomHqsvJmVL95F9On/qaVbtXimFkWlSXhZS7AePu+kfayp97Gd55X6vXSimZ2VEUAXJsByEpe2+1z1FZML7q6j2raE/gXePxGV7EEuc9Z2qMOLtcDuG5RNWrjVGiDMem4eM74cUnlxy5rfD3DugVuFvjvqb8yeN+fGaje8dBlS97czzI5dJ6yFjmexPIDQfr4zOdXFKK7fsTIYk8hIIgbIxXSYYsh6b24C/lrIZJROtjuOnnA2MDiDRCulylhnS+8W1YcmEtVCsrqHU3Ui4MpuBewynhceINp0th4n2dQ0j8D3KdG4r+/wA4FkiIgQ4yuER3P2QT48B5yn4a4Qu2rucxPfr/AHiIEajUnmAPW5/KIiAiIgIiICeEX3z2IEYoW+Ele46eUlFeoPlb0M8iBkceRvp/7gY/zL7h8xEQAx5O6n/uAnhr1D8q+pnkQIzSv8TM3edPKZgW3T2ICIiAiIgIiIGTjUkcdfTX1klYllzDRkOYHqusRAtuDrh6av8AMAf19Z7EQP/Z",
      image: "https://www.lodes.com/wp-content/uploads/2021/03/Random-10.jpg",
      likes: 23,
      caption: "#follow4follow"
    }
  ]);

  //app
  return (
    <div className="app">
      {/* header bar */}
      <HeaderBar />

      {/* posts*/}
      {posts.map((post, index) => (
        <Post
          index={post.id}
          username={post.username}
          avatar={post.avatar}
          image={post.image}
          likes={post.likes}
          caption={post.caption}
        />
      ))}
    </div>
  );
}