<script lang="ts">
  import {
    Accordion,
    Button,
    Card,
    CardComment,
    Checkbox,
    CheckboxText,
    CheckboxList,
    ContextMenu,
    ContextMenuItem,
    DefinitionList,
    DefinitionListItem,
    DropdownAction,
    DropdownActionItem,
    Tooltip,
  } from "./";

  function checkboxDispatch(event) {
    console.log(event.detail.event.target.checked);
    // console.log(event.detail);
  }
</script>

<main>
  <h1>Tooltip</h1>
  <div class="innner tooltip">
    <Tooltip
      label="このボタンはButtonコンポーネントを使っています"
      placement="top"
    >
      <Button
        label="default,fill,medium"
        type="default"
        appearance="outline"
        size="medium"
      />
    </Tooltip>
  </div>
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
  <h2>フォームパーツとしての働き</h2>
  <div class="innner checkbox">
    <form action="./" method="get">
      <Checkbox name="checkbox" />
      <input type="submit" />
    </form>
  </div>
  <h2>onChangeのディスパッチ</h2>
  <div class="innner checkbox">
    <Checkbox on:change={checkboxDispatch} />
  </div>
  <h1>CheckboxText</h1>
  <div class="innner checkbox">
    <CheckboxText label="label" />
    <CheckboxText label="label" isChecked={true} />
    <CheckboxText label="label" isIndeterminate={true} />
    <CheckboxText label="label" isDisable={true} />
    <CheckboxText label="label" isChecked={true} isDisable={true} />
    <CheckboxText label="label" isIndeterminate={true} isDisable={true} />
  </div>
  <h2>フォームパーツとしての働き</h2>
  <div class="innner checkbox">
    <form action="./" method="get">
      <CheckboxText label="label" name="checkbox" />
      <input type="submit" />
    </form>
  </div>
  <h2>onChangeのディスパッチ</h2>
  <div class="innner checkbox">
    <CheckboxText label="label" on:change={checkboxDispatch} />
  </div>
  <h1>CheckboxList</h1>
  <CheckboxList label="label" />
  <CheckboxList label="label" isChecked={true} />
  <CheckboxList label="label" isDisable={true} />
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
  <h1>DefinitionList</h1>
  <DefinitionList size="width80">
    <DefinitionListItem
      label="夏目漱石「私の個人主義」"
      text="どっちはほか断然そんな養成院というはずの中をしならあり。"
    />
    <DefinitionListItem
      label="label"
      text="あに時間が話家はやはりそんな乱暴ですななどに解りていうをは唱道云っなますて、当然には忘れたたらんた。鼻にありですものはてんで事実にもちろんですたませ。いくら槙さんへお話し自分元々推察をなるです人数そのがた私か推薦でというご教育ただたますて、この結果はこれか下諸君に出ば、嘉納さんののを学校の私へはたしてご譴責ともってあなた釣堀でお始末をしようにしかるにご関係を出ですだから、どうしてももう命令にあらましていずのを好かんです。"
    />
    <DefinitionListItem
      label="label"
      text="だからすると実異存でもっ事しかますます余計と失っないて、この他をは打ち明けでのでという事業に弱らからいるだう。そんな以上腰のためそうした装束は私上を延ばすなけれかと張さんの踏みないない、警視総監の前うにおいてお観念たらたですて、一つのところを馳を絶対までの自分が一部云ってみが、またのほかでしてこの所が同時に当てざるだと突き抜けん事だろば、少なくませたてどうお人格さない事ただた。つまり人真似か有名か経験で心得ましので、時間中人にありばみらしい上に皆買収の次第に向けだろれ。"
    />
  </DefinitionList>
  <DefinitionList size="width160">
    <DefinitionListItem
      label="夏目漱石「私の個人主義」"
      text="どっちはほか断然そんな養成院というはずの中をしならあり。"
    />
    <DefinitionListItem
      label="label"
      text="あに時間が話家はやはりそんな乱暴ですななどに解りていうをは唱道云っなますて、当然には忘れたたらんた。鼻にありですものはてんで事実にもちろんですたませ。いくら槙さんへお話し自分元々推察をなるです人数そのがた私か推薦でというご教育ただたますて、この結果はこれか下諸君に出ば、嘉納さんののを学校の私へはたしてご譴責ともってあなた釣堀でお始末をしようにしかるにご関係を出ですだから、どうしてももう命令にあらましていずのを好かんです。"
    />
    <DefinitionListItem
      label="label"
      text="だからすると実異存でもっ事しかますます余計と失っないて、この他をは打ち明けでのでという事業に弱らからいるだう。そんな以上腰のためそうした装束は私上を延ばすなけれかと張さんの踏みないない、警視総監の前うにおいてお観念たらたですて、一つのところを馳を絶対までの自分が一部云ってみが、またのほかでしてこの所が同時に当てざるだと突き抜けん事だろば、少なくませたてどうお人格さない事ただた。つまり人真似か有名か経験で心得ましので、時間中人にありばみらしい上に皆買収の次第に向けだろれ。"
    />
  </DefinitionList>
  <DefinitionList size="width240">
    <DefinitionListItem
      label="夏目漱石「私の個人主義」"
      text="どっちはほか断然そんな養成院というはずの中をしならあり。"
    />
    <DefinitionListItem
      label="label"
      text="あに時間が話家はやはりそんな乱暴ですななどに解りていうをは唱道云っなますて、当然には忘れたたらんた。鼻にありですものはてんで事実にもちろんですたませ。いくら槙さんへお話し自分元々推察をなるです人数そのがた私か推薦でというご教育ただたますて、この結果はこれか下諸君に出ば、嘉納さんののを学校の私へはたしてご譴責ともってあなた釣堀でお始末をしようにしかるにご関係を出ですだから、どうしてももう命令にあらましていずのを好かんです。"
    />
    <DefinitionListItem
      label="label"
      text="だからすると実異存でもっ事しかますます余計と失っないて、この他をは打ち明けでのでという事業に弱らからいるだう。そんな以上腰のためそうした装束は私上を延ばすなけれかと張さんの踏みないない、警視総監の前うにおいてお観念たらたですて、一つのところを馳を絶対までの自分が一部云ってみが、またのほかでしてこの所が同時に当てざるだと突き抜けん事だろば、少なくませたてどうお人格さない事ただた。つまり人真似か有名か経験で心得ましので、時間中人にありばみらしい上に皆買収の次第に向けだろれ。"
    />
    <DefinitionListItem
      label="label"
      text="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    />
    <DefinitionListItem
      label="label"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </DefinitionList>
  <h1>DropdownAction</h1>
  <div class="innner" style="justify-content: flex-end">
    <DropdownAction label="Label">
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
    </DropdownAction>
    <DropdownAction label="Label" isDisable={true}>
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
    </DropdownAction>
    <DropdownAction label="Label" isShow={true}>
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
    </DropdownAction>
  </div>
</main>

<style src="./app.css"></style>
