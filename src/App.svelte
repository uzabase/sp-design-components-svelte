<script lang="ts">
  import {Button,Checkbox} from "./";

  function checkboxDispatch(event) {
    console.log(event.detail.event.target.checked);
  }
</script>

<main>
  <h1>Button type__default</h1>
  <div class="innner button"> 
    <ul class="button-inner">
      <li>
        <Button
          label="default,fill,medium"
          type="default"
          appearance="outline"
          size="medium"
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
</main>

<style src="./app.css"></style>
