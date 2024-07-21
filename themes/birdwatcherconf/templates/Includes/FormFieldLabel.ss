<% if $Title %>
    <label class="col-form-label font-weight-bold d-block" <% if not $HideForAttribute %>for="{$ID}" <% end_if %>id="title-{$ID}">
        {$Title}
        <% if $Required %>
            <span class="help-text">*</span>
        <% end_if %>
    </label>
<% end_if %>
