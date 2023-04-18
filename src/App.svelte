<script lang="ts">
  import {
    Accordion,
    Button,
    Card,
    CardComment,
    Checkbox,
    ContextMenu,
    ContextMenuItem,
  } from "./";

  function checkboxDispatch(event) {
    console.log(event.detail.event.target.checked);
  }
</script>

<main>
  <p>リセットのテスト</p>
  <p class="base">リセットのテスト2</p>
  <h1>Button type__default</h1>
  <div class="innner button">
    <ul class="button-inner">
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="outline"
          size="medium"
          class="testClass"
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="outline"
          size="medium"
          isLoading={true}
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="outline"
          size="medium"
          isSelected={true}
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="outline"
          size="medium"
          isDisable={true}
        />
      </li>
    </ul>

    <ul class="button-inner">
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="fill"
          size="medium"
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="fill"
          size="medium"
          isLoading={true}
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="fill"
          size="medium"
          isSelected={true}
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="fill"
          size="medium"
          isDisable={true}
        />
      </li>
    </ul>
    <ul class="button-inner">
      <li>
        <Button
          label="default,text,medium"
          type="default"
          appearance="text"
          size="medium"
        />
      </li>
      <li>
        <Button
          label="default,text,medium"
          type="default"
          appearance="text"
          size="medium"
          isLoading={true}
        />
      </li>
      <li>
        <Button
          label="default,text,medium"
          type="default"
          appearance="text"
          size="medium"
          isSelected={true}
        />
      </li>
      <li>
        <Button
          label="default,text,medium"
          type="default"
          appearance="text"
          size="medium"
          isDisable={true}
        />
      </li>
    </ul>
  </div>
  <h1>Button type__destructive</h1>
  <div class="innner button">
    <ul class="button-inner">
      <li>
        <Button
          label="destructive,outline,medium"
          type="destructive"
          appearance="outline"
          size="medium"
        />
      </li>
      <li>
        <Button
          label="destructive,outline,medium"
          type="destructive"
          appearance="outline"
          size="medium"
          isDisable={true}
        />
      </li>
    </ul>
    <ul class="button-inner">
      <li>
        <Button
          label="destructive,fill,medium"
          type="destructive"
          appearance="fill"
          size="medium"
        />
      </li>
      <li>
        <Button
          label="destructive,fill,medium"
          type="destructive"
          appearance="fill"
          size="medium"
          isDisable={true}
        />
      </li>
    </ul>
    <ul class="button-inner">
      <li>
        <Button
          label="destructive,text,medium"
          type="destructive"
          appearance="text"
          size="medium"
        />
      </li>
      <li>
        <Button
          label="destructive,text,medium"
          type="destructive"
          appearance="text"
          size="medium"
          isDisable={true}
        />
      </li>
    </ul>
  </div>
  <h1>Button size</h1>
  <div class="innner button">
    <ul class="button-inner">
      <li>
        <Button
          label="medium"
          type="default"
          appearance="outline"
          size="medium"
        />
      </li>
      <li>
        <Button
          label="large"
          type="default"
          appearance="outline"
          size="large"
        />
      </li>
      <li>
        <Button
          label="xLarge"
          type="default"
          appearance="outline"
          size="xLarge"
        />
      </li>
      <li>
        <Button
          label="width160"
          type="default"
          appearance="outline"
          size="width160"
        />
      </li>
      <li>
        <Button
          label="width80"
          type="default"
          appearance="outline"
          size="width80"
        />
      </li>
    </ul>
  </div>
  <h1>Checkbox</h1>
  <div class="innner checkbox">
    <Checkbox />
    <Checkbox isChecked={true} />
    <Checkbox isIndeterminate={true} />
    <Checkbox isDisable={true} />
    <Checkbox isChecked={true} isDisable={true} />
    <Checkbox isIndeterminate={true} isDisable={true} />
  </div>
  <div class="innner checkbox">
    <Checkbox label="label" />
    <Checkbox label="label" isChecked={true} />
    <Checkbox label="label" isIndeterminate={true} />
    <Checkbox label="label" isDisable={true} />
    <Checkbox label="label" isChecked={true} isDisable={true} />
    <Checkbox label="label" isIndeterminate={true} isDisable={true} />
  </div>
  <h2>フォームパーツとしての働き</h2>
  <div class="innner checkbox">
    <form action="./" method="get">
      <Checkbox label="label" name="checkbox" />
      <input type="submit" />
    </form>
  </div>
  <h2>onChangeのディスパッチ</h2>
  <div class="innner checkbox">
    <Checkbox label="label" on:change={checkboxDispatch} />
  </div>
  <h1>Card</h1>
  <div class="innner">
    <Card
      title="smallたいとる"
      time="0000/11/22"
      source="そーす"
      image="/assets/cardImage.png"
      href="#"
      size="small"
    />
    <Card
      title="mediumたいとる"
      time="0000/11/22"
      source="そーす"
      image="/assets/cardImage2.png"
      href="#"
      size="medium"
    />
    <Card
      title="largeたいとる"
      time="0000/11/22"
      source="そーす"
      image="/assets/cardImage3.png"
      href="#"
      size="large"
    />
  </div>
  <h2>オプション要素</h2>
  <div class="innner">
    <Card
      title="どっちもない"
      image="/assets/cardImage.png"
      href="#"
      size="small"
    />
    <Card
      title="timeだけ"
      time="0000/11/22"
      image="/assets/cardImage.png"
      href="#"
      size="small"
    />
    <Card
      title="sourceだけ"
      source="そーす"
      image="/assets/cardImage.png"
      href="#"
      size="small"
    />
  </div>
  <h2>gridレスポンシブ</h2>
  <div class="innner card-inner">
    <Card
      title="smallたいとるながいながいながいながいながいながいながいながいながいながいながい"
      time="0000/11/22"
      source="そーす"
      image="/assets/cardImage.png"
      href="#"
      size="small"
    />
    <Card
      title="smallたいとる"
      time="0000/11/22"
      source="そーす"
      image="/assets/cardImage.png"
      href="#"
      size="small"
    />
    <Card
      title="smallたいとる"
      time="0000/11/22"
      source="そーす"
      image="/assets/cardImage.png"
      href="#"
      size="small"
    />
    <Card
      title="smallたいとる"
      time="0000/11/22"
      source="そーす"
      image="/assets/cardImage.png"
      href="#"
      size="small"
    />
  </div>
  <h1>CardComment</h1>
  <div class="innner">
    <CardComment
      title="smallたいとるsmallたいとるsmallたいとるsmallたいとるsmallたいとるsmallたいとるsmallたいとるsmallたいとるsmallたいとるsmallたいとる"
      time="0000/11/22"
      source="そーす"
      image="/assets/cardImage.png"
      href="#"
      name="なまえ"
      job="肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き肩書き"
      profileImage="/assets/cardCommentProfile.png"
      comment="コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント"
    />
  </div>
  <h1>Accordion</h1>
  <div class="innner">
    <Accordion label="らべる"
      ><p>
        なかみ<br />なかみ<br />なかみ<br />なかみ<br />なかみ<br />なかみ<br
        />なかみ<br />なかみ<br />なかみ<br />なかみ<br />なかみ<br />なかみ<br
        />なかみ<br />なかみ<br />なかみ
      </p></Accordion
    >
    <Accordion
      label="らべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべるらべる"
      ><p>なかみ<br />なかみ</p></Accordion
    >
  </div>
  <h1>ContextMenu</h1>
  <ContextMenu>
    <ContextMenuItem label="ラベル" />
    <ContextMenuItem label="ラベル2" />
    <ContextMenuItem
      label="ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3ラベル3"
    />
  </ContextMenu>
</main>

<style src="./app.css"></style>
