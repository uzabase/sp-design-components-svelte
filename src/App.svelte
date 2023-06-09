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
    SegmentedControl,
    TextBody,
    TextCaption,
    TextLink,
  } from "./";

  function checkboxDispatch(event) {
    console.log(event.detail);
  }
  function buttonDispatch(event) {
    console.log(event.detail);
  }
  function SegmentedControlDispatch(event) {
    console.log(event);
  }
</script>

<main>
  <h1>SegmentedControl</h1>
  <div class="innner">
    <SegmentedControl
      on:change={SegmentedControlDispatch}
      items={[
        {
          value: "年度",
          label: "年度",
        },
        {
          value: "項目",
          label: "項目",
        },
      ]}
      value="年度"
    />
  </div>
  <div class="innner">
    <SegmentedControl
      items={[
        {
          value: "label01",
          label: "label01",
        },
        {
          value: "label02",
          label: "label02",
          disabled: true,
        },
        {
          value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          value: "label03",
          label: "label03",
        },
        {
          value: "label04",
          label: "label04",
        },
      ]}
      value="label04"
    />
  </div>

  <h1>Tooltip</h1>
  <div class="innner tooltip">
    <Tooltip
      label="Tooltips should be about one line long, but sometimes they contain multiple lines of supplementary explanation. Use this style in such cases."
      placement="top"
      zindex="12"
      size="auto"
    >
      <Button
        label="placement=top size=auto"
        type="default"
        appearance="outline"
        size="medium"
      />
    </Tooltip>
    <Tooltip
      label="Tooltips should be about one line long, but sometimes they contain multiple lines of supplementary explanation. Use this style in such cases."
      placement="bottom"
      size="width240"
    >
      <Button
        label="placement=bottom size=width240"
        type="default"
        appearance="outline"
        size="medium"
      />
    </Tooltip>
    <Tooltip
      label="Tooltips should be about one line long, but sometimes they contain multiple lines of supplementary explanation. Use this style in such cases."
      placement="left"
      size="width320"
    >
      <Button
        label="placement=left size=width320"
        type="default"
        appearance="outline"
        size="medium"
      />
    </Tooltip>
    <Tooltip
      label="Tooltips should be about one line long, but sometimes they contain multiple lines of supplementary explanation. Use this style in such cases."
      placement="right"
      size="width400"
    >
      <Button
        label="placement=right size=width400"
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
          on:click={buttonDispatch}
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="outline"
          size="medium"
          loading={true}
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="outline"
          size="medium"
          selected={true}
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="outline"
          size="medium"
          disabled={true}
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
          loading={true}
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="fill"
          size="medium"
          selected={true}
        />
      </li>
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="fill"
          size="medium"
          disabled={true}
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
          loading={true}
        />
      </li>
      <li>
        <Button
          label="default,text,medium"
          type="default"
          appearance="text"
          size="medium"
          selected={true}
        />
      </li>
      <li>
        <Button
          label="default,text,medium"
          type="default"
          appearance="text"
          size="medium"
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
          on:click={checkboxDispatch}
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
    <Checkbox checked={true} />
    <Checkbox indeterminate={true} />
    <Checkbox disabled={true} />
    <Checkbox checked={true} disabled={true} />
    <Checkbox indeterminate={true} disabled={true} />
  </div>
  <h2>classを渡す</h2>
  <div class="innner checkbox">
    <Checkbox class="class1 class2" />
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
    <CheckboxText label="label" checked={true} />
    <CheckboxText label="label" indeterminate={true} />
    <CheckboxText label="label" disabled={true} />
    <CheckboxText label="label" checked={true} disabled={true} />
    <CheckboxText label="label" indeterminate={true} disabled={true} />
  </div>
  <h2>classを渡す</h2>
  <div class="innner checkbox">
    <CheckboxText label="label" class="class1 class2" />
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
  <CheckboxList label="label" checked={true} />
  <CheckboxList label="label" disabled={true} />
  <CheckboxList label="label" checked={true} disabled={true} />
  <CheckboxList label="onChangeのディスパッチ" on:change={checkboxDispatch} />
  <h2>classを渡す</h2>
  <CheckboxList label="label" class="class1 class2" />
  <h1>Card</h1>
  <div class="innner" style="align-items: flex-start">
    <Card
      class="ClassName"
      title="smallたいとる"
      time="0000/11/22"
      source="そーす"
      image="/assets/cardImage.png"
      href="#"
      size="small"
      outbound={true}
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
    <Accordion label="らべる" class="ClassName"
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
    <DefinitionListItem label="夏目漱石「私の個人主義」">
      どっちはほか断然そんな養成院というはずの中をしならあり。
    </DefinitionListItem>
    <DefinitionListItem label="label">
      あに時間が話家はやはりそんな乱暴ですななどに解りていうをは唱道云っなますて、当然には忘れたたらんた。鼻にありですものはてんで事実にもちろんですたませ。いくら槙さんへお話し自分元々推察をなるです人数そのがた私か推薦でというご教育ただたますて、この結果はこれか下諸君に出ば、嘉納さんののを学校の私へはたしてご譴責ともってあなた釣堀でお始末をしようにしかるにご関係を出ですだから、どうしてももう命令にあらましていずのを好かんです。
    </DefinitionListItem>
    <DefinitionListItem label="label">
      だからすると実異存でもっ事しかますます余計と失っないて、この他をは打ち明けでのでという事業に弱らからいるだう。そんな以上腰のためそうした装束は私上を延ばすなけれかと張さんの踏みないない、警視総監の前うにおいてお観念たらたですて、一つのところを馳を絶対までの自分が一部云ってみが、またのほかでしてこの所が同時に当てざるだと突き抜けん事だろば、少なくませたてどうお人格さない事ただた。つまり人真似か有名か経験で心得ましので、時間中人にありばみらしい上に皆買収の次第に向けだろれ。
    </DefinitionListItem>
  </DefinitionList>
  <DefinitionList size="width160">
    <DefinitionListItem label="夏目漱石「私の個人主義」">
      どっちはほか断然そんな養成院というはずの中をしならあり。
    </DefinitionListItem>
    <DefinitionListItem label="label">
      あに時間が話家はやはりそんな乱暴ですななどに解りていうをは唱道云っなますて、当然には忘れたたらんた。鼻にありですものはてんで事実にもちろんですたませ。いくら槙さんへお話し自分元々推察をなるです人数そのがた私か推薦でというご教育ただたますて、この結果はこれか下諸君に出ば、嘉納さんののを学校の私へはたしてご譴責ともってあなた釣堀でお始末をしようにしかるにご関係を出ですだから、どうしてももう命令にあらましていずのを好かんです。
    </DefinitionListItem>
    <DefinitionListItem label="label">
      だからすると実異存でもっ事しかますます余計と失っないて、この他をは打ち明けでのでという事業に弱らからいるだう。そんな以上腰のためそうした装束は私上を延ばすなけれかと張さんの踏みないない、警視総監の前うにおいてお観念たらたですて、一つのところを馳を絶対までの自分が一部云ってみが、またのほかでしてこの所が同時に当てざるだと突き抜けん事だろば、少なくませたてどうお人格さない事ただた。つまり人真似か有名か経験で心得ましので、時間中人にありばみらしい上に皆買収の次第に向けだろれ。
    </DefinitionListItem>
  </DefinitionList>
  <DefinitionList size="width240">
    <DefinitionListItem label="夏目漱石「私の個人主義」">
      どっちはほか断然そんな養成院というはずの中をしならあり。
    </DefinitionListItem>
    <DefinitionListItem label="label">
      あに時間が話家はやはりそんな乱暴ですななどに解りていうをは唱道云っなますて、当然には忘れたたらんた。鼻にありですものはてんで事実にもちろんですたませ。いくら槙さんへお話し自分元々推察をなるです人数そのがた私か推薦でというご教育ただたますて、この結果はこれか下諸君に出ば、嘉納さんののを学校の私へはたしてご譴責ともってあなた釣堀でお始末をしようにしかるにご関係を出ですだから、どうしてももう命令にあらましていずのを好かんです。
    </DefinitionListItem>
    <DefinitionListItem label="label">
      だからすると実異存でもっ事しかますます余計と失っないて、この他をは打ち明けでのでという事業に弱らからいるだう。そんな以上腰のためそうした装束は私上を延ばすなけれかと張さんの踏みないない、警視総監の前うにおいてお観念たらたですて、一つのところを馳を絶対までの自分が一部云ってみが、またのほかでしてこの所が同時に当てざるだと突き抜けん事だろば、少なくませたてどうお人格さない事ただた。つまり人真似か有名か経験で心得ましので、時間中人にありばみらしい上に皆買収の次第に向けだろれ。
    </DefinitionListItem>
    <DefinitionListItem label="label">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </DefinitionListItem>
    <DefinitionListItem label="label">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </DefinitionListItem>
  </DefinitionList>
  <h1>DropdownAction</h1>
  <div class="innner" style="justify-content: flex-end">
    <DropdownAction label="Label">
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
    </DropdownAction>
    <DropdownAction label="Label" disabled={true}>
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
      <DropdownActionItem text="text" />
    </DropdownAction>
  </div>
  <h1>TextBody</h1>
  <TextBody>
    もち十一月に圧迫者も何しろこういうお話しないうなりにただすからいるでしょへは相違いうんないが、どうにはしますたでない。害にするないのはしかるに今がたしかたたで。もう槙さんに担任個人そう徹底がするです校長この権力私か話がというご焦燥んませませらしいから、大きな場合もそれか堅めばらばらを退けが、大森さんののの相場の私がいくらお批評と感ずるけれども私自分にお観念がさようにけっしてご学習の解らないでで、ほとんどけっして推察に使うませてもらっませのに行くないなけれ。しかしまた小筋が見せるのもどう重宝と云っまして、その代りにはいけたらとという内意がなっがいるんでしょ。その中教師の時この先生は私末がするたかと向君を思うですん、新の生涯ましというお承諾うたませから、学校の時を右を九月くらいの金が今朝しからいて、たったの場合にいうがそんな所が同時にはおりませたとするます事ないて、ないないですが別段ご時分いうましはずでますな。
  </TextBody>
  <TextBody weight="bold">
    彼らも事実もしわが下宿人というののところとしですあり。
  </TextBody>
  <h1>TextCaption</h1>
  <TextCaption>
    事実にはもちろん上げと行っんたたうて、まあもっともするて留学もこうなしませのない。またお影響が思ってはいるだのなて、国民よりは、さきほど私か逃れと聴いれですですおられなましといるが、見識も頼めから下さっでん。単に何ともももし個性というおきませが、これがは今中までこれのご講義も若いするいらっしゃるんな。何もじっと創作の事がお著作は知れから出そなませなけれますと、一十の年でまだ見えでという出入りませと、かつそのがたの奥底でありゃれが、どこかをあなたの国家へ意味が申しているますのたうと担任果せるで経過来くるますなり。
  </TextCaption>
  <h1>TextLink</h1>
  <TextLink>一覧を見る</TextLink>
  <TextLink weight="bold">一覧を見る</TextLink>
  <a href="#"><TextLink>一覧を見る</TextLink></a>
</main>

<style src="./app.css"></style>
